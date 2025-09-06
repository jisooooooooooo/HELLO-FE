import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/token';


export const wrap = style({
  background: colors.white01,
  minHeight: '100dvh',
});

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.2rem 1.6rem',
  borderBottom: `1px solid ${colors.grey10}`,
});

export const rowMain = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.2rem',
  padding: 0,
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
});

export const title = style([
  fonts.body02,
  {
    color: colors.black01,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  },
]);

export const date = style([
  fonts.body05,
  {
    color: colors.grey08,
  },
]);
