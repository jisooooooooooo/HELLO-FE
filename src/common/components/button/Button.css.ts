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
    gap: '0.5rem',
    cursor: 'pointer',
  },
]);

export const primaryButton = style([baseButton, { backgroundColor: colors.blue02 }]);

export const secondaryButton = style([baseButton, { backgroundColor: colors.blue03 }]);

export const iconWrapper = style([
  {
    width: '1.5rem',
    height: '1.5rem',
  },
]);
