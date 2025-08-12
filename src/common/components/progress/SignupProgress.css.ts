import { style, styleVariants } from '@vanilla-extract/css';

import { colors } from '@/styles/token';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '2.5rem 1.6rem',
});

export const track = style({
  position: 'relative',
  width: '30rem',
  height: '0.6rem',
  borderRadius: '0.6rem',
  background: colors.grey10,
  overflow: 'hidden',
});

export const bar = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  borderRadius: '0.6rem',
  background: colors.blue03,
  transition: 'width 200ms ease',
});

export const barWidth = styleVariants({
  '1of4': { width: '25%' },
  '2of4': { width: '50%' },
  '3of4': { width: '75%' },
  '4of4': { width: '100%' },
});
