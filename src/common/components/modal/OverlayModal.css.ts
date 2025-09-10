import { style } from '@vanilla-extract/css';

import { colors, layout, zIndex } from '@/styles/token';

export const overlay = style([
  layout.flexCenter,
  {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100dvh',
    background: colors.black01_70,
    zIndex: zIndex.modal,
    padding: '2rem',
    boxSizing: 'border-box',
  },
]);

export const panel = style([
  {
    width: '100%',
    maxWidth: '36rem',
    borderRadius: '2.4rem',
    background: colors.white01,
    boxShadow: '0 1.2rem 3rem rgba(0,0,0,0.18)',
    padding: '2.4rem',
  },
]);
