import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from '../page/Game.css';
import CongratsModal from './CongratsModal';

import { PATH } from '@/shared/constants/path';
import { useOverlayModal } from '@/common/hooks/useOverlayModal';
import GameCard from '@/pages/game/components/GameCard';
import { IcClock } from '@/assets/svgs';
import type { Card } from '@/pages/game/hooks/useMemoryGame';

interface Props {
  cards: Card[];
  formattedTime: string;
  allMatched: boolean;
  onRestart: () => void;
  locking: boolean;
  onPick: (idx: number) => void;
}

const GamePlay = ({ cards, formattedTime, allMatched, onRestart, locking, onPick }: Props) => {
  const openedRef = useRef(false);
  const navigate = useNavigate();
  const { open } = useOverlayModal();

  useEffect(() => {
    if (!allMatched || openedRef.current) {
      return;
    }
    openedRef.current = true;
    open<'end' | 'restart'>(({ close, unmount }) => (
      <CongratsModal
        time={formattedTime}
        onEnd={() => {
          close('end');
          unmount();
        }}
        onRestart={() => {
          close('restart');
          unmount();
        }}
      />
    )).then((res) => {
      if (res === 'end') {
        window.location.assign(PATH.GAME);
      } else if (res === 'restart') {
        onRestart();
        openedRef.current = false;
      }
    });
  }, [allMatched, formattedTime, navigate, onRestart]);

  return (
    <section className={s.container}>
      <div className={s.playTopBar}>
        <div className={s.bar} />
        <div className={s.time}>
          <IcClock className={s.clock} aria-hidden />
          <span className={s.timeText}>{formattedTime}</span>
        </div>
        <div className={s.bar} />
      </div>

      <div className={s.board}>
        {cards.map((c, i) => (
          <GameCard
            key={c.id}
            emoji={c.emoji}
            bgColor={c.bg}
            flipped={c.flipped || c.matched}
            disabled={locking || c.matched}
            onClick={() => onPick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default GamePlay;
