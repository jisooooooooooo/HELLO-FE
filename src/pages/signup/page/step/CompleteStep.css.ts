import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    justifyContent: 'center',
    minHeight: 'calc(100vh - 15rem)',
    padding: '2.5rem 4.4rem',
  },
]);

export const title = style([
  fonts.title01,
  {
    width: '30rem',
    marginBottom: '0.4rem',
    color: colors.black01,
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
]);

export const description = style([
  fonts.body03,
  {
    width: '30rem',
    marginBottom: '3.2rem',
    color: colors.black01,
    textAlign: 'center',
  },
]);

export const buttonContainer = style([
  {
    position: 'fixed',
    left: '50%',
    bottom: '5.5rem',
    transform: 'translateX(-50%)',
  },
]);
