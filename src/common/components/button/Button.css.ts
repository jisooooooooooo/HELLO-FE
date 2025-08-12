import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const baseButton = style([
  layout.flexCenter,
  fonts.caption01,
  {
    width: '30rem',
    height: '3.8rem',
    borderRadius: '5px',
    border: 'none',
    color: colors.white01,
    cursor: 'pointer',
  },
]);

export const primaryButton = style([baseButton, { backgroundColor: colors.blue02 }]);

export const secondaryButton = style([baseButton, { backgroundColor: colors.blue03 }]);
