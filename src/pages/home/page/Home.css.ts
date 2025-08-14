import { style } from '@vanilla-extract/css';

import { colors } from '@/styles/token/color.css.ts';
import { fonts } from '@/styles/token/typography.css.ts';

export const container = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  padding: '20px 20px 32px', // 좌우 여백 조금 줄임
  display: 'flex',
  flexDirection: 'column',
  gap: '12px', // 블록 간 간격 줄임
  background: colors.grey11,
  minHeight: '100dvh',
  boxSizing: 'border-box',
  alignItems: 'center', // 내부 블록 가운데 정렬
});

/* 날짜 & 인사 */
export const dateSection = style({
  width: '90%', // 전체 폭보다 좁게
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const date = style({
  ...fonts.body01,
  color: colors.grey01,
});

export const greeting = style({
  ...fonts.caption02,
  color: colors.grey07,
});

/* 날씨 카드 */
export const weatherCard = style({
  width: '90%', // 폭 축소
  background: colors.blue07,
  color: colors.white01,
  borderRadius: '12px',
  padding: '18px 20px', // 패딩 줄임
  display: 'flex',
  marginBottom: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
});

export const weatherLeft = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const city = style({
  ...fonts.body02,
  color: colors.white01,
});

export const weather = style({
  ...fonts.caption02,
  color: colors.white01,
  opacity: 0.9,
});

export const temp = style({
  ...fonts.subtitle04,
  color: colors.white01,
});

/* 메뉴 2x2 */
export const menuGrid = style({
  width: '90%', // 전체 폭 줄임
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px', // 블록 간격 줄임
  marginTop: '4px',
});

export const menuItem = style({
  background: colors.white01,
  border: `1px solid ${colors.grey11}`,
  borderRadius: '10px',
  width: '100%',
  aspectRatio: '0.6 / 0.7', // 너비 대비 세로가 더 긴 비율
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  cursor: 'pointer',
  transition: 'transform .08s ease, box-shadow .12s ease',
  selectors: {
    '&:active': {
      transform: 'scale(0.98)',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    },
  },
});

export const menuIcon = style({
  fontSize: '24px', // 아이콘 크기 줄임
  lineHeight: 1,
  color: colors.blue07,
});

export const menuLabel = style({
  ...fonts.body04,
  color: colors.grey02,
});

/* (SVG 아이콘을 쓸 때) */
export const menuSvg = style({
  width: '24px',
  height: '24px',
  fill: colors.blue07,
});
