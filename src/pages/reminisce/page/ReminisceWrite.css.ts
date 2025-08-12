import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const title = style([
  fonts.subtitle02,
  {
    marginBottom: '3rem',
    color: colors.black01,
  },
]);

export const card = style([
  {
    padding: '2rem',
    width: '34rem',
    minHeight: '40rem',
    height: '60vh',
    borderRadius: '1rem',
    background: colors.blue01,
    position: 'relative',
  },
]);

export const inputTitle = style([
  fonts.subtitle02,
  {
    width: '100%',
    marginBottom: '1.5rem',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: colors.black01,
    '::placeholder': {
      color: colors.grey06,
      opacity: 0.5,
    },
  },
]);

export const inputContent = style([
  fonts.body05,
  {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    resize: 'none',
    color: colors.black01,
    '::placeholder': {
      color: colors.grey06,
      opacity: 0.5,
    },
  },
]);

export const content = style([
  fonts.body03,
  {
    color: colors.black01,
  },
]);

export const mikeButton = style([
  {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    background: colors.blue03,
    position: 'absolute',
    right: '2rem',
    bottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
]);

export const mikeIcon = style([
  {
    width: '1.8rem',
    height: '2.4rem',
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
