import * as s from '../page/Game.css';

import Button from '@/common/components/button/Button';
import GameCard from '@/pages/game/components/GameCard';
import { colors } from '@/styles/token';
import { IcSmile, IcSad } from '@/assets/svgs';

interface Props {
  onStart: () => void;
}

const GameIntro = ({ onStart }: Props) => {
  return (
    <section className={s.container}>
      <div className={s.bubbleRow}>
        <IcSmile className={s.bubbleIcon} aria-hidden />
        <p className={s.bubbleText}>같은 모양의 카드를 찾아주세요!</p>
      </div>

      <div className={s.examples}>
        <div className={s.exampleRow}>
          <div className={s.exampleCard}>
            <GameCard
              emoji="🐵"
              bgColor={colors.gameOrange02}
              flipped
              animated={false}
              interactive={false}
            />
          </div>
          <div className={s.exampleCard}>
            <GameCard
              emoji="🐵"
              bgColor={colors.gameOrange02}
              flipped
              animated={false}
              interactive={false}
            />
          </div>
        </div>
        <div className={s.bubbleRow}>
          <IcSad className={s.bubbleIcon} aria-hidden />
          <p className={s.bubbleText}>
            다른 모양의 카드를 선택하면
            <br />
            점수가 올라가지 않아요!
          </p>
        </div>
        <div className={s.exampleRow}>
          <div className={s.exampleCard}>
            <GameCard
              emoji="🐷"
              bgColor={colors.gameRose02}
              flipped
              animated={false}
              interactive={false}
            />
          </div>
          <div className={s.exampleCard}>
            <GameCard
              emoji="🐵"
              bgColor={colors.gameOrange02}
              flipped
              animated={false}
              interactive={false}
            />
          </div>
        </div>
      </div>
      <div className={s.buttonBox}>
        <Button variant="secondary" label="시작하기" onClick={onStart} />
      </div>
    </section>
  );
};

export default GameIntro;
