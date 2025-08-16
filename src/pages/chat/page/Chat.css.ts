import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@/styles/token';

export const wrap = style([
  {
    display: 'grid',
    gridTemplateRows: '1fr auto',
    height: 'calc(100dvh - 5rem)',
    background: colors.white01,
  },
]);

export const list = style([
  {
    overflowY: 'auto',
    padding: '1.2rem 1.6rem 2rem',
    background: colors.white01,
  },
]);

export const dateDivider = style([
  layout.flexCenter,
  {
    margin: '1.6rem 0', // 날짜칩 위아래 여백 넓힘
    position: 'relative',
  },
]);

export const dateChip = style([
  fonts.body05,
  {
    padding: '0.5rem 1rem',
    borderRadius: '0.8rem',
    background: colors.grey09,
    color: colors.white01,
  },
]);

export const row = style([
  {
    display: 'flex',
    margin: '1rem 0', // 버블 간격 넓힘
    gap: '0.8rem',
  },
]);

export const left = style([{ justifyContent: 'flex-start' }]);
export const right = style([{ justifyContent: 'flex-end' }]);

// 🔥 글씨 더 크게 (body01 대신 subtitle04/05 수준)
export const bubble = style([
  fonts.subtitle04,
  {
    maxWidth: '75%',
    borderRadius: '1.6rem',
    padding: '1rem 1.4rem', // 패딩 더 줌
    lineHeight: 1.6,
    wordBreak: 'break-word',
    whiteSpace: 'pre-wrap',
  },
]);

// 내 메시지 (오른쪽)
export const bubbleMe = style([
  bubble,
  {
    background: '#A4D5FF', // 연한 하늘색 톤 (사진 참고해서 바꿈)
    color: colors.black01,
    borderTopRightRadius: '0.6rem',
  },
]);

// 상대 메시지 (왼쪽)
export const bubbleOther = style([
  bubble,
  {
    background: colors.grey11,
    color: colors.black01,
    borderTopLeftRadius: '0.6rem',
  },
]);

export const inputBar = style([
  {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
    gap: '0.8rem',
    padding: '0.8rem 1rem',
    borderTop: `1px solid ${colors.grey10}`,
    background: colors.white01,
  },
]);

export const iconBtn = style([
  layout.flexCenter,
  {
    width: '2.8rem',
    height: '2.8rem',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    padding: 0,
  },
]);

export const input = style([
  fonts.body02, // 입력창 폰트도 크게
  {
    width: '100%',
    minHeight: '3rem',
    maxHeight: '10rem',
    padding: '0.8rem 1rem',
    borderRadius: '1rem',
    border: `1px solid ${colors.grey10}`,
    outline: 'none',
    resize: 'none',
    overflowY: 'auto',
  },
]);
