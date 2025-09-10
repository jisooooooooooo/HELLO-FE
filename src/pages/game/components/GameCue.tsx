import * as s from '../page/Game.css';

interface Props {
  phase: 'ready' | 'go';
}

const GameCue = ({ phase }: Props) => {
  return (
    <section className={s.container}>
      <div className={s.cueOverlay} aria-live="polite">
        <div className={s.cuePanel}>
          <span className={s.cueText}>{phase === 'ready' ? '준비' : '시작!'}</span>
        </div>
      </div>
    </section>
  );
};

export default GameCue;
