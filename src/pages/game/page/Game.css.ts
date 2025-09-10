import { style } from '@vanilla-extract/css';

import { colors, fonts, layout, zIndex } from '@/styles/token';

export const container = style([
  layout.flexColumn,
  {
    width: '100%',
    maxWidth: '43rem',
    margin: '0 auto',
    padding: '2.2rem 2rem 3rem',
    minHeight: 'calc(100dvh - 5rem)',
    boxSizing: 'border-box',
    gap: '1.6rem',
    background: colors.white01,
    position: 'relative',
  },
]);

export const playTopBar = style([layout.flexColumn, { width: '100%', gap: '1rem' }]);

export const time = style([layout.flexCenter, { gap: '0.8rem' }]);

export const timeText = style([fonts.display01, { marginTop: '0.5rem' }]);

export const clock = style([{ width: '2.8rem', height: '2.8rem' }]);

export const bar = style([{ height: '0.6rem', background: colors.blue02, borderRadius: '15px' }]);

export const board = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.4rem',
    width: '100%',
    marginTop: '0.4rem',
  },
]);

export const bubbleRow = style([
  layout.flexCenter,
  {
    width: '100%',
    maxWidth: '32.5rem',
    minHeight: '8.4rem',
    borderRadius: '20px',
    background: colors.blue10,
    padding: '1.2rem 1.6rem',
    gap: '1rem',
    margin: '0 auto',
  },
]);
export const bubbleIcon = style([{ width: '4rem', height: '4rem' }]);

export const bubbleText = style([fonts.body01, { color: colors.black01 }]);

export const examples = style([{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }]);

export const exampleRow = style([
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: '1.6rem',
    justifyItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '32.5rem',
    margin: '0 auto',
  },
]);

export const exampleCard = style([{ width: '11rem' }]);

export const buttonBox = style([layout.flexCenter, { marginTop: '5rem' }]);

export const textBtn = style([
  fonts.caption01,
  { color: colors.blue07, background: 'transparent', border: 'none', cursor: 'pointer' },
]);

export const playTitle = style([fonts.subtitle04, { color: colors.black01 }]);

export const desc = style([fonts.body03, { color: colors.grey07 }]);

export const bubble = style([
  layout.flexCenter,
  {
    width: '100%',
    minHeight: '5.4rem',
    borderRadius: '16px',
    background: colors.blue10,
    padding: '1.4rem 1.6rem',
  },
]);

export const cueOverlay = style([
  layout.flexCenter,
  {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100dvh',
    zIndex: zIndex.overlay,
    pointerEvents: 'auto',
  },
]);

export const cuePanel = style([
  layout.flexCenter,
  { width: '100%', maxWidth: '43rem', height: '100dvh', background: colors.black01_70 },
]);

export const cueText = style([fonts.display02, { color: colors.white01 }]);
