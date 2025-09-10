import { useState } from 'react';

import GameIntro from '../components/GameIntro';
import GamePlay from '../components/GamePlay';
import GameCue from '../components/GameCue';

import PageHeader from '@/common/components/header/PageHeader';
import Layout from '@/shared/components/layout/Layout';
import { useMemoryGame } from '@/pages/game/hooks/useMemoryGame';

const Game = () => {
  const { started, cards, formattedTime, allMatched, restartGame, locking, startGame, pickCard } =
    useMemoryGame();
  const [cue, setCue] = useState<'idle' | 'ready' | 'go'>('idle');

  const handleStartWithCue = () => {
    setCue('ready');
    window.setTimeout(() => setCue('go'), 700);
    window.setTimeout(() => {
      setCue('idle');
      startGame();
    }, 1400);
  };

  if (cue !== 'idle') {
    return <GameCue phase={cue} />;
  }
  if (!started) {
    return (
      <Layout header={<PageHeader title="같은 그림 찾기" />}>
        <GameIntro onStart={handleStartWithCue} />
      </Layout>
    );
  }

  return (
    <Layout header={<PageHeader title="같은 그림 찾기" confirmOnBack isGamePlaying />}>
      <GamePlay
        cards={cards}
        formattedTime={formattedTime}
        allMatched={allMatched}
        onRestart={restartGame}
        locking={locking}
        onPick={pickCard}
      />
    </Layout>
  );
};

export default Game;
