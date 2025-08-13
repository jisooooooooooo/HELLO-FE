import { globalStyle, style } from '@vanilla-extract/css';

import './reset.css.ts';
import { colors } from './token/color.css.ts';

globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '430px',
    '--height': '100vh',

    '--margin': '0',

  },
});

globalStyle('html, body', {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '62.5%',
  fontFamily: "'Pretendard', sans-serif",
  background: colors.grey09,
  scrollbarWidth: 'none',
});

export const rootContainer = style({
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  minHeight: 'var(--height)',
  width: '100%',
  margin: 'var(--margin) auto',
  backgroundColor: colors.white01,

  '@media': {
    '(min-width: 430px)': {
      width: '430px',
    },
    '(max-width: 375px)': {
      width: '100%',
    },
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
