import { style } from '@vanilla-extract/css';

import { colors, layout, zIndex, fonts } from '@/styles/token';

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
  layout.flexColumn,
  {
    width: '100%',
    maxWidth: '36rem',
    borderRadius: '2.4rem',
    background: colors.white01,
    boxShadow: '0 1.2rem 3rem rgba(0,0,0,0.18)',
    padding: '2.4rem',
    alignItems: 'center',
    gap: '1.6rem',
  },
]);

export const badge = style([
  layout.flexCenter,
  {
    width: '12rem',
    height: '12rem',
    borderRadius: '50%',
    background: colors.blue01,
  },
]);

export const emoji = style([{ fontSize: '6rem' }]);

export const title = style([fonts.subtitle04, { color: colors.black01, textAlign: 'center' }]);
export const subtitle = style([fonts.body01, { color: colors.black01, textAlign: 'center' }]);

export const actions = style([
  {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.2rem',
    width: '100%',
    marginTop: '0.8rem',
  },
]);

export const button = style([
  layout.flexCenter,
  fonts.body04,
  {
    height: '4.4rem',
    borderRadius: '1.2rem',
    background: colors.grey09,
    color: colors.black01,
    border: 'none',
    cursor: 'pointer',
  },
]);

export const primary = style([{ background: colors.blue03, color: colors.white01 }]);
