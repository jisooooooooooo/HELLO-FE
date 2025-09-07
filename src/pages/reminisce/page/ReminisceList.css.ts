import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem',
    backgroundColor: colors.blue10,
    minHeight: '100vh',
    alignItems: 'stretch',
    position: 'relative',
  },
]);

export const header = style({
  marginBottom: '3.2rem',
});

export const pageTitle = style([fonts.title03]);

export const pageSubtitle = style([
  fonts.body05,
  {
    marginTop: '0.4rem',
    color: colors.grey07,
  },
]);

export const noteList = style({
  listStyle: 'none',
  display: 'grid',
  gap: '1.2rem',
  margin: '0',
  padding: '0',
});

export const card = style({
  background: colors.white01,
  borderRadius: '20px',
  boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
  padding: '1.2rem',
});

export const dateLabel = style([
  fonts.caption02,
  {
    marginBottom: '0.8rem',
    color: colors.grey07,
  },
]);

export const titleRow = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.6rem 0',
  border: 'none',
  cursor: 'pointer',
  background: 'transparent',
  textAlign: 'left',
});

export const titleText = style([
  fonts.body01,
  {
    textAlign: 'left',
  },
]);

export const caret = style({
  display: 'inline-flex',
  transition: 'transform 0.2s ease',
  justifySelf: 'end',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const caretOpen = style({
  transform: 'rotate(180deg)',
});

export const content = style({
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.25s ease',
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
});

export const contentOpen = style({
  maxHeight: '200vh',
});

export const contentText = style([
  fonts.body05,
  {
    margin: '0.8rem 0 1.2rem',
    whiteSpace: 'pre-wrap',
  },
]);

export const buttonContainer = style([
  {
    position: 'sticky',
    bottom: '1.2rem',
    display: 'grid',
    placeItems: 'center',
    marginTop: '1rem',
  },
]);

export const decorImage = style({
  position: 'absolute',
  right: '3.5rem',
  top: '1rem',
  width: '9.6rem',
  height: 'auto',
  pointerEvents: 'none',
  zIndex: 0,
});
