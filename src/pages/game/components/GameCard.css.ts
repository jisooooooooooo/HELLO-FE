import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const card = style([
  {
    position: 'relative',
    width: '100%',
    aspectRatio: '3 / 4',
    borderRadius: '12px',
    userSelect: 'none',
    perspective: '80rem',
    boxShadow: '0 0.4rem 1rem rgba(0,0,0,0.06)',
    selectors: {
      '&[data-interactive="true"]': { cursor: 'pointer' },
      '&[data-interactive="false"]': { cursor: 'default' },
    },
  },
]);

export const flip = style([
  {
    position: 'relative',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.4s ease',
    willChange: 'transform',
    borderRadius: '12px',
  },
]);

export const flipped = style([{ transform: 'rotateY(180deg)' }]);
export const noAnim = style([{ transition: 'none' }]);

const sideBase = style([
  layout.flexCenter,
  {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    padding: '2.6rem 1rem',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  },
]);
export const front = style([sideBase, { transform: 'rotateY(180deg)' }]);
export const back = style([sideBase, { background: colors.grey03 }]);

export const emoji = style([{ fontSize: '6rem', lineHeight: 1 }]);
export const label = style([fonts.caption02, { color: colors.white01 }]);
