import { useEffect, useRef } from 'react';

import { useConfettiCanvas } from '../hooks/useConfettiCanvas';
import * as s from './CongratsModal.css';

interface Props {
  time: string;
  onEnd: () => void;
  onRestart: () => void;
}

const CongratsModal = ({ time, onEnd, onRestart }: Props) => {
  const canvasHostRef = useRef<HTMLDivElement | null>(null);

  useConfettiCanvas(canvasHostRef);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener('keydown', onKeyDown, true);
    return () => window.removeEventListener('keydown', onKeyDown, true);
  }, []);

  return (
    <div
      ref={canvasHostRef}
      className={s.overlay}
      role="dialog"
      aria-modal
      aria-labelledby="congrats-title"
      aria-describedby="congrats-subtitle"
    >
      <div className={s.panel} onClick={(e) => e.stopPropagation()}>
        <div className={s.badge} aria-hidden>
          <span className={s.emoji}>👻</span>
        </div>
        <h2 id="congrats-title" className={s.title}>
          축하합니다!
        </h2>
        <p id="congrats-subtitle" className={s.subtitle}>
          소요 시간: {time}
        </p>
        <footer className={s.actions}>
          <button type="button" className={s.button} onClick={onEnd}>
            종료하기
          </button>
          <button type="button" className={`${s.button} ${s.primary}`} onClick={onRestart}>
            다시 하기
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CongratsModal;
