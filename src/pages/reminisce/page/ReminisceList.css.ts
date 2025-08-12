import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const pageTitle = style([
  fonts.title03,
  {
    width: '34rem',
    marginBottom: '2.5rem',
    textAlign: 'left',
    color: colors.grey08,
  },
]);

export const list = style([
  layout.flexColumn,
  {
    gap: '2rem',
  },
]);

export const card = style([
  layout.flexColumnBetween,
  {
    width: '34rem',
    padding: '2rem',
    borderRadius: '1rem',
    background: colors.blue01,
  },
]);

export const cardTitle = style([
  fonts.subtitle02,
  {
    marginBottom: '0.4rem',
    color: colors.black01,
  },
]);

export const cardDateContainer = style([
  layout.flexAlignCenter,
  {
    marginBottom: '2rem',
  },
]);

export const cardDateIcon = style([
  {
    width: '2rem',
    height: '2rem',
    marginRight: '1rem',
  },
]);

export const cardDate = style([
  fonts.body05,
  {
    color: colors.grey07,
  },
]);

export const cardSummary = style([
  fonts.subtitle05,
  { marginBottom: '2rem', color: colors.black01 },
]);

export const cardCta = style([
  fonts.body04,
  {
    display: 'inline-block',
    alignSelf: 'flex-end',
    color: colors.blue09,
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
