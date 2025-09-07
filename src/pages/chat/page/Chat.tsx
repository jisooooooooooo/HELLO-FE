import { useEffect, useRef, useState } from 'react';
import type { KeyboardEventHandler, MouseEvent } from 'react';

import * as s from './Chat.css';

/** ===== Web Speech 최소 타입 선언 ===== */
type SpeechRecognitionResultLike = { 0: { transcript: string } };
type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
};
interface ISpeechRecognition {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onstart?: () => void;
  onend?: () => void;
  onerror?: () => void;
  onresult?: (e: SpeechRecognitionEventLike) => void;
}
interface SpeechRecognitionConstructor {
  new (): ISpeechRecognition;
}
declare global {
  interface Window {
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
    SpeechRecognition?: SpeechRecognitionConstructor;
  }
}

type Msg = {
  id: string;
  text: string;
  who: 'me' | 'other'; // me=사용자(오른쪽), other=AI(왼쪽)
  date?: string;
  audioSrc?: string; // 시연용 mp3 경로
};

/** ================== 초기: 상대가 먼저 ================== */
const initial: Msg[] = [
  { id: 'd1', text: '', who: 'other', date: '7월 8일 (화)' },
  {
    id: 'o0',
    who: 'other',
    text:
      '채팅을 길게 클릭하면 설정한 목소리로 답변을 들을 수 있습니다.\n\n' +
      '오늘 하루 어떠셨어요? 천천히 편하게 말씀해 주세요. 😊',
    audioSrc: '/audios/ai_intro.mp3',
  },
];

const Chat = () => {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  // 시연용: 길게 누르면 mp3 재생
  const pressTimerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ✅ 고정 시나리오 진행 단계 (0→1→2)
  const stepRef = useRef<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newId = () => (crypto as any).randomUUID?.() ?? String(Date.now() + Math.random());

  // 새 메시지 생길 때 하단 스크롤
  useEffect(() => {
    const el = listRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [msgs.length]);

  // 언마운트 정리
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  /** ============== 고정 시나리오 규칙 ==============
   * Step 0 (네 1번째 입력):
   *  - 사용자가: "햇살" & "봉오리/꽃" 느낌 → 답: "와, 벌써 꽃봉오리가 보였군요. 어떤 꽃이 제일 예뻤나요? 🌸"
   *
   * Step 1 (네 2번째 입력):
   *  - 사용자가: "수선화" 또는 "들꽃/봄에 아이들이랑" 느낌 → 답: "그때 이야기도 더 해 주실 수 있나요? 듣고 싶어요."
   *
   * Step 2 (네 3번째 입력):
   *  - 사용자가: "내일", "9시", "투썸(플레이스)" → 답: "투썸 플레이스에서 친구들과 좋은 시간 보내세요! 일정으로 저장할게요."
   *
   * ※ 키워드만 맞으면 되게 regex 완화. 순서/띄어쓰기/조사 달라도 잡힘.
   */
  const SCRIPT = [
    {
      match: (t: string) => /햇살/.test(t) && /(봉오리|꽃)/.test(t),
      reply: '와, 벌써 꽃봉오리가 보였군요. 어떤 꽃이 제일 예뻤나요? 🌸',
      audio: '/audios/ai_flow1.mp3',
    },
    {
      match: (t: string) => /(수선화|들꽃)/.test(t) || (/봄/.test(t) && /(아이|아이들)/.test(t)),
      reply: '그때 이야기도 더 해 주세요. 듣고 싶어요.',
      audio: '/audios/ai_flow2.mp3',
    },
    {
      match: (t: string) =>
        /(내일)/.test(t) && /(9\s*시)/.test(t) && /(투\s*썸|투썸\s*플레이스|twosome)/i.test(t),
      reply: '투썸 플레이스에서 친구들과 좋은 시간 보내세요! 일정으로 저장할게요.',
      audio: '/audios/ai_schedule.mp3',
    },
  ] as const;

  /** ============== 고정 시나리오 답변기 ============== */
  const makeFixedReply = (userText: string): { text: string; audio: string } => {
    const t = userText.replace(/\s+/g, ' ').trim();
    const i = Math.max(0, Math.min(stepRef.current, SCRIPT.length - 1));
    const node = SCRIPT[i];

    // 해당 스텝의 패턴이 맞으면 그 답변, 아니면 "가장 근접한" 규칙 순회로 보정
    if (node.match(t)) {
      stepRef.current = Math.min(stepRef.current + 1, SCRIPT.length - 1);
      return { text: node.reply, audio: node.audio };
    }

    // 보정(사용자가 살짝 다르게 입력해도 해당 단계에 맞추려 시도)
    for (let k = 0; k < SCRIPT.length; k += 1) {
      if (SCRIPT[k].match(t)) {
        stepRef.current = Math.min(k + 1, SCRIPT.length - 1);
        return { text: SCRIPT[k].reply, audio: SCRIPT[k].audio };
      }
    }

    // 그래도 안 맞으면 현재 스텝의 답을 고정적으로 내보냄(시연 안정성)
    return { text: node.reply, audio: node.audio };
  };

  /** ============== 전송 & 자동응답 ============== */
  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const myMsg: Msg = { id: newId(), text: trimmed, who: 'me' };
    setMsgs((prev) => [...prev, myMsg]);
    setText('');

    const { text: aiText, audio } = makeFixedReply(trimmed);

    setTimeout(() => {
      setMsgs((prev) => [...prev, { id: newId(), who: 'other', text: aiText, audioSrc: audio }]);
    }, 600);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  /** ============== 마이크 입력(기존 유지) ============== */
  const handleMic = () => {
    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    const Ctor: SpeechRecognitionConstructor | undefined =
      window.SpeechRecognition ?? window.webkitSpeechRecognition;

    if (!Ctor) {
      alert('이 브라우저에서는 음성 인식을 지원하지 않습니다.');
      return;
    }

    const recog = new Ctor();
    recognitionRef.current = recog;

    recog.lang = 'ko-KR';
    recog.interimResults = true;
    recog.continuous = false;

    recog.onstart = () => {
      setListening(true);
    };
    recog.onend = () => {
      setListening(false);
    };
    recog.onerror = () => {
      setListening(false);
    };

    recog.onresult = (e: SpeechRecognitionEventLike) => {
      let transcript = '';
      for (let i = e.resultIndex; i < e.results.length; i += 1) {
        transcript += e.results[i][0].transcript;
      }
      const t = transcript.trim();
      if (t) {
        setText((prev) => (prev ? `${prev} ${t}` : t));
      }
    };

    recog.start();
  };

  /** ============== 길게 누르면 mp3 재생 ============== */
  const playAudio = (src?: string) => {
    if (!src) {
      return;
    }
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio();
      }
      audioRef.current.pause();
      audioRef.current.src = src;
      audioRef.current.currentTime = 0;
      void audioRef.current.play().catch(() => {});
    } catch {
      // ignore
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleBubbleMouseDown = (_e: MouseEvent, _text: string, audioSrc?: string) => {
    if (pressTimerRef.current) {
      window.clearTimeout(pressTimerRef.current);
    }
    pressTimerRef.current = window.setTimeout(() => {
      playAudio(audioSrc);
    }, 500);
  };

  const handleBubbleMouseUp = () => {
    if (pressTimerRef.current) {
      window.clearTimeout(pressTimerRef.current);
      pressTimerRef.current = null;
    }
    stopAudio();
  };

  return (
    <div className={s.wrap}>
      {/* 메시지 리스트 */}
      <div ref={listRef} className={s.list}>
        {msgs.map((m) => {
          if (m.date) {
            return (
              <div key={m.id} className={s.dateDivider}>
                <span className={s.dateChip}>{m.date}</span>
              </div>
            );
          }
          const isMe = m.who === 'me';
          return (
            <div key={m.id} className={`${s.row} ${isMe ? s.right : s.left}`}>
              <div
                className={isMe ? s.bubbleMe : s.bubbleOther}
                onMouseDown={
                  !isMe ? (e) => handleBubbleMouseDown(e, m.text, m.audioSrc) : undefined
                }
                onMouseUp={!isMe ? handleBubbleMouseUp : undefined}
                onMouseLeave={!isMe ? handleBubbleMouseUp : undefined}
                title={!isMe ? '길게 눌러 음성 듣기' : undefined}
              >
                {m.text}
              </div>
            </div>
          );
        })}
      </div>

      {/* 입력 바 */}
      <div className={s.inputBar}>
        <div className={s.inputBox}>
          <textarea
            className={s.input}
            value={text}
            placeholder="여기에 메시지를 입력하세요..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {/* 마이크 버튼 */}
          <button
            className={s.micBtn}
            aria-label={listening ? '음성 입력 중지' : '음성 입력'}
            title={listening ? '음성 입력 중지' : '음성 입력'}
            onClick={handleMic}
          >
            <img
              src="/svgs/ic_mic.svg"
              alt="mic"
              className={s.micIconImg}
              style={{ opacity: listening ? 0.6 : 1 }}
            />
          </button>

          {/* 전송 버튼 */}
          <button className={s.iconBtn} aria-label="전송" title="전송" onClick={send}>
            <img src="/svgs/ic_send.svg" alt="send" className={s.iconImg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
