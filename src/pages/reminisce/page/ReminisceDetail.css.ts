import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const dateContainer = style([
  layout.flexAlignCenter,
  {
    marginBottom: '3rem',
  },
]);
export const dateIcon = style([
  {
    width: '1.8rem',
    height: '1.8rem',
    marginRight: '1rem',
    marginBottom: '0.3rem',
  },
]);

export const date = style([
  fonts.subtitle02,
  {
    color: colors.black01,
  },
]);

export const card = style([
  {
    width: '34rem',
    padding: '2rem',
    borderRadius: '1rem',
    background: colors.blue01,
  },
]);

export const title = style([
  fonts.subtitle02,
  {
    marginBottom: '2.4rem',
    color: colors.black01,
  },
]);

export const content = style([
  fonts.body03,
  {
    color: colors.black01,
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
