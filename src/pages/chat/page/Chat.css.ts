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
  fonts.body05,
  {
    padding: '0.5rem 1rem',
    borderRadius: '0.8rem',
    //background: colors.grey09,
    color: colors.black01,
  },
]);

export const row = style({
  display: 'flex',
  margin: '1.5rem 0', // 버블 간격 넓힘
  gap: '0.8rem',
});

export const left = style({ justifyContent: 'flex-start' });
export const right = style({ justifyContent: 'flex-end' });

// 글씨 크게(노인 가독성), 패딩 업
export const bubble = style([
  fonts.subtitle04, // 1.8rem / 700 / 140%
  {
    maxWidth: '75%',
    borderRadius: '1.6rem',
    padding: '1rem 1.4rem',
    lineHeight: 1.6,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
  },
]);

// 내 말풍선(오른쪽, 할머니 = me)
export const bubbleMe = style([
  bubble,
  {
    background: '#D7ECFF', // 연한 하늘색(캡처 유사 톤)
    color: colors.black01,
    borderTopRightRadius: '0.6rem',
  },
]);

// 상대 말풍선(왼쪽, 가상 손녀 = other)
export const bubbleOther = style([
  bubble,
  {
    background: colors.grey11,
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
  //borderTop: `1px solid ${colors.grey10}`,
  background: colors.white01,
});

// 둥근 입력박스: 높이 낮추고 패딩 축소
export const inputBox = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  background: colors.grey11,
  borderRadius: '2rem',
  padding: '0.4rem 0.6rem',
  minHeight: '3.8rem', // 전체 높이 기준
});

// textarea 글꼴 상속 + 높이 컨트롤
export const input = style([
  fonts.body02,
  {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    resize: 'none',
    padding: '0.2rem 0.6rem',
    lineHeight: 1.5,
    fontSize: '1.6rem',
    fontFamily: 'inherit', // ✅ 글씨체 상속 강제
    minHeight: '2.4rem', // 텍스트 영역 자체 높이
    maxHeight: '9rem',
    selectors: {
      '&::placeholder': { color: colors.grey07 },
    },
  },
]);

// 공통 아이콘 버튼 (전송 버튼에 사용)
export const iconBtn = style([
  layout.flexCenter,
  {
    width: '3.2rem',
    height: '3.2rem',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  },
]);

// 마이크 버튼 (조금 더 큼)
export const micBtn = style([
  layout.flexCenter,
  {
    width: '3.8rem', // 클릭 영역 크게
    height: '3.8rem',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    padding: 0,
    flexShrink: 0,
  },
]);

// 아이콘 크기
export const iconImg = style({
  width: '28px',
  height: '28px',
});

// 마이크 아이콘만 크게 (32px)
export const micIconImg = style({
  width: '32px',
  height: '32px',
});
