import { useEffect, useRef, useState } from 'react';
import type { KeyboardEventHandler } from 'react';

import * as s from './Chat.css';

/** ===== Web Speech 최소 타입 선언 ===== */
type SpeechRecognitionResultLike = {
  0: { transcript: string };
};
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
  onerror?: (e: unknown) => void;
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
/** ==================================== */

type Msg = {
  id: string;
  text: string;
  who: 'me' | 'other';
  date?: string;
};

const initial: Msg[] = [
  { id: 'd1', text: '', who: 'other', date: '7월 8일 (화)' },
  { id: 'm1', text: '할머니~\n오늘은 어떻게 지내셨어요?', who: 'me' },
  { id: 'o1', text: '그냥 집에 있었지. 요즘은\n바깥 나가기도 귀찮아', who: 'other' },
  {
    id: 'm2',
    text: '그럴 수 있어요. 그래도 이렇게 이야기 나누는 건 참 좋죠?\n그럼 집에서 저한테 옛날 이야기 해주세요!',
    who: 'me',
  },
  {
    id: 'o2',
    text: '옛날에 말이야, 내가 너희 할아버지 처음 만났을 땐 봄이었지.\n진달래가 한창 피던 날이었어.',
    who: 'other',
  },
];

const Chat = () => {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  // 새 메시지 생길 때 리스트 하단으로 스크롤
  useEffect(() => {
    const el = listRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [msgs.length]);

  // 언마운트 시 음성인식 정리
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const send = () => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    setMsgs((prev) => [
      ...prev,
      { id: crypto.randomUUID?.() ?? String(Date.now()), text: trimmed, who: 'me' },
    ]);
    setText('');
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleMic = () => {
    // 듣는 중이면 중지
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

    recog.onstart = () => setListening(true);
    recog.onend = () => setListening(false);
    recog.onerror = () => setListening(false);

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
              <div className={isMe ? s.bubbleMe : s.bubbleOther}>{m.text}</div>
              {/* 시간 표시는 제거 */}
            </div>
          );
        })}
      </div>

      {/* 입력 바 (마이크 왼쪽, 전송 오른쪽) */}
      <div className={s.inputBar}>
        <button
          className={s.iconBtn}
          aria-label={listening ? '음성 입력 중지' : '음성 입력'}
          title={listening ? '음성 입력 중지' : '음성 입력'}
          onClick={handleMic}
        >
          <img
            src="/svgs/ic_mic.svg"
            alt=""
            width={24}
            height={24}
            style={{ opacity: listening ? 0.6 : 1 }}
          />
        </button>

        <textarea
          className={s.input}
          value={text}
          placeholder="여기에 메시지를 입력하세요…"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button className={s.iconBtn} aria-label="전송" title="전송" onClick={send}>
          <img src="/svgs/ic_send.svg" alt="" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Chat;
