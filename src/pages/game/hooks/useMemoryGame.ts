import { useEffect, useMemo, useState } from 'react';

import { colors } from '@/styles/token';

export interface Card {
  id: string;
  pairId: number;
  emoji: string;
  bg: string;
  flipped: boolean;
  matched: boolean;
}

const EMOJI_SET: Array<{ emoji: string; bg: string }> = [
  { emoji: '🦊', bg: colors.gameOrange01 },
  { emoji: '🐰', bg: colors.gamePink01 },
  { emoji: '🐷', bg: colors.gameRose01 },
  { emoji: '🐸', bg: colors.gamePurple01 },
  { emoji: '🐱', bg: colors.gamePeach01 },
  { emoji: '🐵', bg: colors.gameYellow01 },
];

const newId = () => Math.random().toString(36).slice(2, 10);
const shuffle = <T>(arr: T[]) =>
  arr
    .map((v) => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(({ v }) => v);

export const useMemoryGame = () => {
  const [started, setStarted] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [picked, setPicked] = useState<number[]>([]);
  const [locking, setLocking] = useState(false);
  const [tries, setTries] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const [tickId, setTickId] = useState<number | null>(null);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    const mm = String(m).padStart(2, '0');
    const ss = String(s).padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const startTimer = () => {
    if (tickId) {
      window.clearInterval(tickId);
    }
    const id = window.setInterval(() => setElapsed((t) => t + 1), 1000);
    setTickId(id);
  };
  const stopTimer = () => {
    if (tickId) {
      window.clearInterval(tickId);
      setTickId(null);
    }
  };

  const initGame = () => {
    const pairs = EMOJI_SET.slice(0, 6).flatMap((e, i) => [
      { id: newId(), pairId: i, emoji: e.emoji, bg: e.bg, flipped: false, matched: false },
      { id: newId(), pairId: i, emoji: e.emoji, bg: e.bg, flipped: false, matched: false },
    ]);
    const deck = shuffle(pairs);
    setCards(deck);
    setPicked([]);
    setLocking(false);
    setTries(0);
    setMatchedPairs(0);
    setElapsed(0);
    startTimer();
  };

  const startGame = () => {
    setStarted(true);
    initGame();
  };

  const restartGame = () => {
    stopTimer();
    setStarted(false);
    setCards([]);
    setElapsed(0);
  };

  const pickCard = (idx: number) => {
    if (locking) {
      return;
    }
    const c = cards[idx];
    if (!c || c.flipped || c.matched) {
      return;
    }

    const next = cards.slice();
    next[idx] = { ...c, flipped: true };
    setCards(next);

    if (picked.length === 0) {
      setPicked([idx]);
      return;
    }

    if (picked.length === 1) {
      const firstIdx = picked[0];
      const first = next[firstIdx];
      const second = next[idx];
      setPicked([firstIdx, idx]);
      setTries((t) => t + 1);

      if (first.pairId === second.pairId) {
        setCards((prev) => {
          const updated = prev.slice();
          updated[firstIdx] = { ...first, matched: true };
          updated[idx] = { ...second, matched: true };
          return updated;
        });
        setMatchedPairs((m) => m + 1);
        setPicked([]);
      } else {
        setLocking(true);
        window.setTimeout(() => {
          setCards((prev) => {
            const u = prev.slice();
            u[firstIdx] = { ...u[firstIdx], flipped: false };
            u[idx] = { ...u[idx], flipped: false };
            return u;
          });
          setPicked([]);
          setLocking(false);
        }, 700);
      }
    }
  };

  const allMatched = started && matchedPairs === 6;

  useEffect(() => {
    if (allMatched) {
      stopTimer();
    }
  }, [allMatched]);

  useEffect(() => () => stopTimer(), []);

  const formattedTime = useMemo(() => formatTime(elapsed), [elapsed]);

  return {
    started,
    cards,
    tries,
    matchedPairs,
    elapsed,
    formattedTime,
    allMatched,
    locking,
    startGame,
    restartGame,
    pickCard,
  } as const;
};
