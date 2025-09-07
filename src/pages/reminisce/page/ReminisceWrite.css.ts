import { keyframes, style } from '@vanilla-extract/css';

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
    appearance: 'none',
    WebkitAppearance: 'none',
    selectors: {
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
      '&::-webkit-search-decoration': {
        WebkitAppearance: 'none',
      },
      '&::-ms-clear': {
        display: 'none',
        width: 0,
        height: 0,
      },
    },
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
  layout.flexCenter,
  {
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    background: colors.blue03,
    position: 'absolute',
    right: '2rem',
    bottom: '2rem',
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

const pulse = keyframes({
  '0%': { boxShadow: '0 0 0 0 rgba(0,0,0,0.06)', transform: 'scale(1)' },
  '70%': { boxShadow: '0 0 0 0.8rem rgba(0,0,0,0.03)', transform: 'scale(1.02)' },
  '100%': { boxShadow: '0 0 0 0 rgba(0,0,0,0.0)', transform: 'scale(1)' },
});

export const mikeButtonRecording = style([
  {
    animation: `${pulse} 1.6s ease-out infinite`,
    opacity: 0.95,
  },
]);

export const sttInterim = style([
  fonts.caption01,
  {
    position: 'absolute',
    left: '2rem',
    bottom: '2.2rem',
    maxWidth: '70%',
    color: colors.grey06,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
]);

export const sttError = style([
  fonts.caption01,
  {
    position: 'absolute',
    left: '2rem',
    bottom: '1rem',
    maxWidth: '70%',
    color: '#d9534f',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
]);
