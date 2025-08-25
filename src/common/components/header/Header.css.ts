import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const header = style([
  layout.flexBetweenCenter,
  {
    position: 'relative',
    height: '5rem',
    padding: '2.2rem 1.6rem',
    backgroundColor: colors.white01,
  },
]);

export const logo = style([
  {
    width: '8rem',
    height: '2.8rem',
  },
]);

export const title = style([
  fonts.body01,
  {
    color: colors.black01,
    textAlign: 'center',
  },
]);

export const profileButton = style([
  {
    width: '2.8rem',
    height: '2.8rem',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
]);
