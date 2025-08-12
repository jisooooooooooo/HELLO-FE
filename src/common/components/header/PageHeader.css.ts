import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const header = style([
  layout.flexCenter,
  {
    position: 'relative',
    height: '5rem',
    padding: '2.2rem 1.6rem',
    backgroundColor: colors.white01,
    borderBottom: `1px solid ${colors.grey10}`,
  },
]);

export const backButton = style([
  layout.flexCenter,
  {
    position: 'absolute',
    top: '50%',
    left: '1.6rem',
    transform: 'translateY(-50%)',
    width: '1.55rem',
    height: '1.55rem',
    border: 'none',
    cursor: 'pointer',
  },
]);

export const title = style([
  fonts.body01,
  {
    color: colors.black01,
    textAlign: 'center',
  },
]);
