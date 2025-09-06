import { style } from '@vanilla-extract/css';

import { colors } from '@/styles/token/color.css.ts';
import { fonts } from '@/styles/token/typography.css.ts';

/** 피그마 느낌 살리기: 내부 폭(가로) 줄여 여백 확보 */
const INNER_W = '84%'; // 가로 좁힘
const PILL_H = 105; // 날씨/일정 높이 동일
const CHAT_MIN_H = 180; // 챗봇 카드 높이
const CARD_RADIUS = 30; // 카드 라운드

export const container = style({
  width: '100%',
  maxWidth: '430px',
  margin: '0 auto',
  padding: '20px 0 28px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  background: colors.white01,
  minHeight: 'calc(100dvh - 5rem)',
  boxSizing: 'border-box',
});

/* 날짜 & 인사 */
export const dateSection = style({
  width: INNER_W,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});
export const date = style({ ...fonts.body01, color: colors.black01 });
export const greeting = style({ ...fonts.body03, color: colors.grey07 });

/* 날씨 카드 */
export const weatherCard = style({
  width: INNER_W,
  margin: '0 auto',
  background: '#D7EDFF',
  borderRadius: `${CARD_RADIUS}px`,
  padding: '0 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `${PILL_H}px`,
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
});
export const weatherLeft = style({ display: 'flex', flexDirection: 'column', gap: '2px' });
export const city = style({ ...fonts.subtitle04, color: colors.grey02 });
export const weather = style({ ...fonts.caption02, color: colors.grey06 });
export const tempWrap = style({ display: 'flex', alignItems: 'center', gap: '10px' });
export const thermo = style({});
export const temp = style({ ...fonts.title03, color: colors.grey02 });

/* 챗봇 CTA */
export const chatCta = style({
  width: INNER_W,
  margin: '0 auto',
  position: 'relative',
  background: colors.blue05,
  borderRadius: `${CARD_RADIUS}px`,
  padding: '20px 18px',
  color: colors.white01,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: `${CHAT_MIN_H}px`,
  boxShadow: '0 14px 30px rgba(34, 86, 190, 0.22)',
  overflow: 'hidden',
  marginTop: '6px',
  marginBottom: '10px',
});
export const chatTexts = style({ display: 'flex', flexDirection: 'column', gap: '6px' });
export const chatTitle = style({
  ...fonts.title03,
  color: colors.white01,
  fontSize: '25px', // 피그마 지정
  lineHeight: '1.2',
});
export const chatDesc = style({ ...fonts.caption02, opacity: 0.95 });
export const chatButton = style({
  marginTop: '20px',
  alignSelf: 'flex-start',
  padding: '10px 16px',
  borderRadius: '999px',
  border: '1px solid rgba(255,255,255,0.85)',
  background: colors.white01,
  color: colors.grey02,
  ...fonts.body05,
  cursor: 'pointer',
  boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
  selectors: { '&:active': { transform: 'scale(0.98)' } },
});
export const chatArt = style({
  width: '150px',
  height: 'auto',
  position: 'absolute',
  right: '8px',
  bottom: '2px',
  pointerEvents: 'none',
});

/* 2칸 그리드 (회상기록 / 게임) */
export const gridTwo = style({
  width: INNER_W,
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
});

/* 공통 타일 */
const tileBase = {
  position: 'relative' as const,
  borderRadius: `${CARD_RADIUS}px`,
  padding: '16px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
  border: 'none',
  overflow: 'hidden',
  aspectRatio: '1 / 0.868',
};

export const cardMemo = style({
  ...tileBase,
  background: colors.blue02,
  color: colors.grey02,
});
export const cardGame = style({
  ...tileBase,
  background: colors.yellow01,
  color: colors.grey02,
});

/* 텍스트 */
export const cardTextBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  whiteSpace: 'pre-line',
});
export const cardTitle = style({
  ...fonts.title04,
  color: colors.grey02,
  fontSize: '20px', // 피그마 지정
  lineHeight: '1.25',
});
export const cardSub = style({ ...fonts.caption02, color: colors.grey06 });

/* 아이콘 (공통: 우하단) */
export const cardArt = style({
  width: '64px',
  height: 'auto',
  position: 'absolute',
  right: '14px',
  bottom: '10px',
  pointerEvents: 'none',
});

/* 일정 카드 */
export const scheduleCard = style({
  width: INNER_W,
  margin: '0 auto',
  background: '#EBF6FF',
  borderRadius: `${CARD_RADIUS}px`,
  padding: '0 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: `${PILL_H}px`,
  position: 'relative',
  boxShadow: '0 8px 18px rgba(0,0,0,0.08)',
  marginTop: '6px',
});

/* 일정 아이콘만: 우측 + 세로 중앙 */
export const scheduleArt = style({
  width: '64px',
  height: 'auto',
  position: 'absolute',
  right: '14px',
  top: '50%',
  transform: 'translateY(-50%)', // ⬅️ 세로 중앙 정렬
  pointerEvents: 'none',
});

export const scheduleOverlay = style({
  position: 'absolute',
  inset: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

/* (SVG 채움색 필요 시) */
export const menuSvg = style({ fill: '#4E8DFF' });
