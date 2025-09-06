// Chat.css.ts
import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/styles/token';

export const wrap = style({
  display: 'grid',
  gridTemplateRows: '1fr auto',
  height: 'calc(100dvh - 5rem)', // 헤더(5rem) 제외
  background: colors.white01,
});

export const list = style({
  overflowY: 'auto',
  padding: '0.1rem 1.6rem 0.1rem',
  background: colors.white01,
});

export const dateDivider = style([
  layout.flexCenter,
  {
    margin: '1rem 0',
    position: 'relative',
  },
]);

export const dateChip = style([
  // 🔻 날짜 칩도 살짝 축소 (body05 -> caption02)
  fonts.caption02,
  {
    padding: '0.3rem 0.8rem',
    borderRadius: '0.8rem',
    color: colors.black01,
  },
]);

export const row = style({
  display: 'flex',
  margin: '1.2rem 0', // 버블 간격 살짝 축소
  gap: '0.8rem',
});

export const left = style({ justifyContent: 'flex-start' });
export const right = style({ justifyContent: 'flex-end' });

/* =========================
   말풍선 텍스트 사이즈 다운
   기존: fonts.subtitle04 (1.8rem)
   변경: fonts.body03 (1.6→1.4rem)
   ========================= */
export const bubble = style([
  fonts.body03,
  {
    maxWidth: '75%',
    borderRadius: '1.6rem',
    padding: '0.8rem 1.2rem', // 패딩도 소폭 축소
    lineHeight: 1.5,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
  },
]);

// 내 말풍선(오른쪽, 할머니 = me)
export const bubbleMe = style([
  bubble,
  {
    background: '#D7ECFF', // 연한 하늘색
    color: colors.black01,
    borderTopRightRadius: '0.6rem',
  },
]);

// 상대 말풍선(왼쪽, 가상 손녀 = other)
export const bubbleOther = style([
  bubble,
  {
    background: '#F2F2F7',
    color: colors.black01,
    borderTopLeftRadius: '0.6rem',
  },
]);

/** 하단 입력 영역 */
export const inputBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '0.6rem 1rem',
  background: colors.white01,
});

// 둥근 입력박스
export const inputBox = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  background: colors.grey11,
  borderRadius: '2rem',
  padding: '0.4rem 0.6rem',
  minHeight: '3.6rem',
});

// textarea 글꼴 상속 + 높이 컨트롤
export const input = style([
  // 🔻 입력 글씨도 한 단계 축소 (body02 -> body05)
  fonts.body05,
  {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    resize: 'none',
    padding: '0.2rem 0.6rem',
    lineHeight: 1.5,
    // fontSize는 토큰에서 내려오므로 별도 지정 X
    fontFamily: 'inherit',
    minHeight: '2.2rem',
    maxHeight: '8rem',
    selectors: {
      '&::placeholder': { color: colors.grey07 },
    },
  },
]);

// 공통 아이콘 버튼 (전송 버튼에 사용)
export const iconBtn = style([
  layout.flexCenter,
  {
    width: '3.0rem',
    height: '3.0rem',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  },
]);

// 마이크 버튼
export const micBtn = style([
  layout.flexCenter,
  {
    width: '3.4rem',
    height: '3.4rem',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  },
]);

// 아이콘 크기
export const iconImg = style({
  width: '24px', // 🔻 28 → 24
  height: '24px',
});

// 마이크 아이콘만 조금 크게
export const micIconImg = style({
  width: '28px', // 🔻 32 → 28
  height: '28px',
});

/* ===== 모바일에서 한 번 더 줄이는 미디어쿼리(선택) =====
   필요 없으면 이 블록 삭제해도 됨
*/
export const _mobileTweak = style({
  '@media': {
    '(max-width: 480px)': {
      // 말풍선 글꼴 더 축소
      fontSize: '1.3rem',
    },
  },
});
