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
  who: 'me' | 'other'; // me = 할머니(오른쪽), other = 가상손녀(왼쪽)
  date?: string;
};

// 상대(손녀) → 나(할머니) → 상대 → 나 순서
const initial: Msg[] = [
  { id: 'd1', text: '', who: 'other', date: '7월 8일 (화)' },

  { id: 'o1', who: 'other', text: '할머니~\n오늘은 어떻게 지내셨어요?' },
  { id: 'm1', who: 'me', text: '그냥 집에 있었지. 요즘은 바깥 나가기도 귀찮아' },

  {
    id: 'o2',
    who: 'other',
    text:
      '그럴 수 있어요. 그래도 이렇게 이야기 나누는 건 참 좋죠?\n' +
      '그럼 집에서 저한테 옛날 이야기 해주세요!',
  },
  {
    id: 'm2',
    who: 'me',
    text:
      '옛날에 말이야, 내가 너희 할아버지 처음 만났을 땐 봄이었지.\n' +
      '진달래가 한창 피던 날이었어.',
  },
];

const Chat = () => {
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<ISpeechRecognition | null>(null);

  // 새 메시지 생길 때 하단 스크롤
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
      { id: (crypto as any).randomUUID?.() ?? String(Date.now()), text: trimmed, who: 'me' },
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
            </div>
          );
        })}
      </div>

      {/* 입력 바: 둥근 입력박스 안에 textarea + mic + send */}
      <div className={s.inputBar}>
        <div className={s.inputBox}>
          <textarea
            className={s.input}
            value={text}
            placeholder="여기에 메시지를 입력하세요..."
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {/* 마이크 버튼 (조금 더 큼) */}
          <button
            className={s.micBtn}
            aria-label={listening ? '음성 입력 중지' : '음성 입력'}
            title={listening ? '음성 입력 중지' : '음성 입력'}
            onClick={handleMic}
          >
            <img
              src="/svgs/ic_mic.svg"
              alt="mic"
              className={s.micIconImg} // ✅ 32px
              style={{ opacity: listening ? 0.6 : 1 }}
            />
          </button>

          {/* 전송 버튼 (아이콘만, 28px) */}
          <button className={s.iconBtn} aria-label="전송" title="전송" onClick={send}>
            <img src="/svgs/ic_send.svg" alt="send" className={s.iconImg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
