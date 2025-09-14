import { style } from '@vanilla-extract/css';

/* 페이지 래퍼 */
export const wrap = style({
  minHeight: '100vh',
  padding: '20px 0 32px',
  display: 'grid',
  rowGap: 20,
  boxSizing: 'border-box',
  justifyItems: 'center',
});

/* 상단 날짜 헤더: 2열 */
export const dateWrap = style({
  width: '84%',
  maxWidth: 430,
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: 10,
  alignItems: 'center',
});

/* 왼쪽: 큰 숫자 */
export const dateBig = style({
  fontSize: 37, // ← 기준 높이
  fontWeight: 500,
  lineHeight: 1,
});

/* 오른쪽: 숫자 높이에 딱 맞추기 */
export const dateMeta = style({
  height: 30, // ← dateBig과 동일 높이로 고정 (36px)
  display: 'flex',

  flexDirection: 'column',
  justifyContent: 'space-between', // 위/아래로 분배
});

/* 텍스트는 여백/행간으로 튀지 않게 */
export const dateDow = style({
  color: '#9aa1a9',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1, // ← 튀지 않게
  margin: 0,
});

export const dateYearMonth = style({
  color: '#b8bec6',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 2, // ← 튀지 않게
  margin: 0,
});

/* 상단 연속 학습 카드 */
export const streakCard = style({
  background: '#5C84B9',
  color: '#fff',
  borderRadius: 20,
  padding: '26px 24px',
  minHeight: 120,
  width: '84%',
  maxWidth: 430,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '0 2px 14px rgba(0,0,0,0.08)',
});

export const streakText = style({
  fontSize: 18,
  lineHeight: 1.4,
  fontWeight: 700,
  whiteSpace: 'pre-line',
});

export const ringWrap = style({
  width: 90,
  height: 90,
  display: 'grid',
  placeItems: 'center',
});

/* 섹션 타이틀 */
export const sectionTitle = style({
  width: '84%',
  maxWidth: 430,
  fontSize: 18,
  fontWeight: 800,
  marginTop: 20,
  marginBottom: 10,
});

/* 오늘의 추천 게임 */
export const twoCols = style({
  width: '84%',
  display: 'grid',
  gridTemplateColumns: 'max-content max-content',
  columnGap: 40,
  alignItems: 'stretch',
});

export const col = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 18,
});

/* SVG 버튼 */
export const imgButton = style({
  display: 'block',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
});

export const img = style({
  display: 'block',
  width: '114%',
  height: 'auto',
});
