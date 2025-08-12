import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const title = style([
  fonts.title01,
  { color: colors.black01, width: '30rem', marginBottom: '2.2rem' },
]);

export const description = style([
  fonts.body03,
  { color: colors.black01, width: '30rem', marginBottom: '3.2rem' },
]);

export const allTerms = style([
  layout.flexAlignCenter,
  {
    width: '30rem',
    height: '3.8rem',
    padding: '0 1.6rem',
    gap: '0.8rem',
    marginBottom: '2.3rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.grey11,
  },
]);

export const allTermsText = style([fonts.caption01, { color: colors.black01 }]);

export const termsContainer = style([
  layout.flexColumn,
  {
    width: '30rem',
    gap: '2.4rem',
  },
]);

export const terms = style([
  layout.flexAlignCenter,
  {
    width: '30rem',
    padding: '0 1.6rem',
    gap: '0.8rem',
  },
]);

export const termsText = style([fonts.caption02, { color: colors.black01 }]);

export const buttonContainer = style([
  {
    position: 'fixed',
    bottom: '5.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
]);
