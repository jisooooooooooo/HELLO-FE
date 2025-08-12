import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

const formWidth = '30rem';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const title = style([
  fonts.title01,
  { width: formWidth, marginBottom: '9rem', color: colors.black01 },
]);

export const inputGroup = style([
  layout.flexColumn,
  {
    marginBottom: '4.7rem',
  },
]);

export const inputLabel = style([
  fonts.caption01,
  { marginBottom: '0.3rem', color: colors.black01 },
]);

export const input = style([
  layout.flexAlignCenter,
  fonts.caption02,
  {
    width: formWidth,
    height: '4rem',
    padding: '0 1.6rem',
    border: `1px solid ${colors.grey10}`,
    borderRadius: '0.5rem',
    backgroundColor: colors.white01,
    color: colors.black01,
    selectors: {
      '&::placeholder': {
        color: colors.grey09,
        opacity: 1,
      },
    },
  },
]);

export const buttonContainer = style([
  {
    position: 'fixed',
    bottom: '5.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
]);
