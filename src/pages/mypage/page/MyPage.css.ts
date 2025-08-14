import { style } from '@vanilla-extract/css';

import { colors, fonts } from '@/styles/token';
import { layout } from '@/styles/token/layout.css';

export const container = style([
  layout.flexColumnCenter,
  {
    alignItems: 'center',
    padding: '2.5rem 4.4rem',
  },
]);

export const greet = style([
  fonts.subtitle03,
  {
    color: colors.black01,
    marginBottom: '1rem',
    width: '30rem',
  },
]);

export const name = style([
  fonts.display01,
  {
    color: colors.black01,
    display: 'inline-block',
  },
]);

export const email = style([
  fonts.subtitle03,
  {
    color: colors.black01,
    marginBottom: '0.5rem',
    width: '30rem',
  },
]);

export const verification = style([
  fonts.subtitle03,
  {
    color: colors.black01,
    width: '30rem',
  },
]);

export const wakeupSection = style({
  marginTop: '3rem',
  width: '30rem',
});

export const inputGroup = style([layout.flexColumn]);

export const inputLabel = style([fonts.body04, { color: colors.black01, marginBottom: '1rem' }]);

export const input = style([
  layout.flexAlignCenter,
  fonts.caption02,
  {
    backgroundColor: colors.white01,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '0.5rem',
    color: colors.black01,
    height: '4rem',
    padding: '0 1.6rem',
    selectors: {
      '&::placeholder': {
        color: colors.grey09,
        opacity: 1,
      },
    },
    width: '30rem',
  },
]);

export const timeTextLabel = style({
  fontSize: '1.6rem',
});

export const clockIcon = style({
  marginLeft: 'auto',
  width: '2rem',
  height: '2rem',
});

export const timePicker = style({
  backgroundColor: colors.white01,
  border: `1px solid ${colors.grey10}`,
  borderRadius: '0.75rem',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  gap: '1rem',
  justifyContent: 'space-between',
  marginTop: '1rem',
  padding: '1rem',
  width: '100%',
});

export const timeRow = style([
  layout.flexColumnCenter,
  {
    flex: 1,
    gap: '0.5rem',
  },
]);

export const arrowIcon = style({
  height: '2.75rem',
  width: '2.75rem',
});

export const timeText = style([fonts.body03]);

export const ampmRow = style({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
});

export const active = style({
  backgroundColor: colors.blue02,
  borderRadius: '5px',
  color: colors.white01,
  padding: '0.3rem 0.8rem',
});

export const mealSection = style({
  marginTop: '3rem',
  width: '30rem',
});

export const mealLabel = style([
  fonts.body04,
  {
    color: colors.black01,
    marginBottom: '1rem',
  },
]);

export const mealBlock = style({
  marginBottom: '2rem',
});

export const mealTitle = style([
  fonts.caption01,
  {
    color: colors.black01,
    marginBottom: '0.5rem',
  },
]);

export const mealGrid = style({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
});

export const mealButton = style([
  fonts.caption02,
  {
    backgroundColor: colors.white01,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '0.5rem',
    color: colors.black01,
    padding: '1.5rem 0',
    textAlign: 'center',
  },
]);

export const mealButtonActive = style([
  fonts.caption01,
  {
    backgroundColor: colors.blue02,
    border: `1px solid ${colors.blue02}`,
    color: colors.white01,
  },
]);

export const logoutRow = style([
  layout.flexCenter,
  {
    gap: '1rem',
    marginTop: '2rem',
  },
]);

export const logoutLink = style([
  fonts.caption02,
  {
    background: 'none',
    border: 'none',
    color: colors.grey07,
    cursor: 'pointer',
    padding: 0,
  },
]);

export const divider = style({
  color: colors.black01,
  lineHeight: '1.8',
});
