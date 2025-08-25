import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

const formWidth = '30rem';

export const sr = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

export const container = style([
  layout.flexColumnCenter,
  {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
]);

export const logo = style({
  width: '25rem',
  height: 'auto',
  marginBottom: '10rem',
});

export const title = style([
  fonts.title03,
  { width: formWidth, marginBottom: '2rem', color: colors.black01 },
]);

export const inputGroup = style([
  layout.flexColumn,
  {
    marginBottom: '2rem',
  },
]);

export const inputWrapper = style([
  layout.flexAlignCenter,
  {
    position: 'relative',
    width: formWidth,
  },
]);

export const input = style([
  layout.flexAlignCenter,
  fonts.body02,
  {
    width: '100%',
    height: '4rem',
    padding: '0 3rem 0 3.5rem',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: colors.grey10,
    color: colors.black01,
    selectors: {
      '&::placeholder': {
        color: colors.grey08,
        opacity: 1,
      },
    },
  },
]);

export const iconLeft = style({
  position: 'absolute',
  left: '1rem',
  width: '2rem',
  height: '2rem',
});

export const iconRight = style({
  position: 'absolute',
  right: '1rem',
  width: '2rem',
  height: '2rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const buttonContainer = style({
  marginTop: '3.5rem',
});

export const signupText = style([
  fonts.body02,
  {
    color: colors.grey08,
    textAlign: 'center',
    position: 'fixed',
    bottom: '2rem',
    left: 0,
    right: 0,
    width: '100%',
  },
  {
    '@media': {
      '(min-width: 768px)': {
        position: 'static',
        marginTop: '2rem',
        width: 'auto',
        left: 'auto',
        right: 'auto',
        bottom: 'auto',
      },
    },
  },
]);

export const signupLink = style([
  fonts.body02,
  {
    color: colors.blue02,
    textDecoration: 'none',
    selectors: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
]);
