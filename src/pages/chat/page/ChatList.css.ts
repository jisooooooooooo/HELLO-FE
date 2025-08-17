import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@/styles/token'; // 폰트 토큰을 여기서 re-export 하지 않으면 경로를 typography.css.ts로 바꿔줘

export const wrap = style({
  background: colors.white01,
  minHeight: '100dvh',
});

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1.2rem 1.6rem',
  borderBottom: `1px solid ${colors.grey10}`,
  // ❌ hover/active 제거
});

export const rowMain = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.2rem',
  padding: 0,
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  // ❌ hover/active 제거
});

export const title = style([
  fonts.body02, // 1.6rem / 500
  {
    color: colors.black01,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  },
]);

export const date = style([
  fonts.body05, // 1.4rem / 400
  {
    color: colors.grey08,
  },
]);

export const trashBtn = style({
  flex: '0 0 auto',
  width: '2.4rem',
  height: '2.4rem',
  border: 'none',
  background: 'transparent',
  display: 'grid',
  placeItems: 'center',
  cursor: 'pointer',
});

export const trashIcon = style({
  width: '1.8rem',
  height: '1.8rem',
});
