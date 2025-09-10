import * as s from './GameCard.css';

import { colors } from '@/styles/token';

interface Props {
  emoji: string;
  bgColor?: string;
  flipped?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  animated?: boolean;
  interactive?: boolean;
}

const GameCard = ({
  emoji,
  bgColor = colors.grey11,
  flipped = false,
  disabled,
  onClick,
  animated = true,
  interactive = true,
}: Props) => {
  const handle = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={s.card}
      aria-disabled={disabled}
      data-interactive={interactive}
      onClick={handle}
    >
      <div className={`${s.flip} ${flipped ? s.flipped : ''} ${animated ? '' : s.noAnim}`}>
        <div className={s.front} style={{ background: bgColor }}>
          <span className={s.emoji} aria-hidden>
            {emoji}
          </span>
        </div>
        <div className={s.back} />
      </div>
    </button>
  );
};

export default GameCard;
