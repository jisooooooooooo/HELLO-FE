import { style } from '@vanilla-extract/css';

/* 화면 전체를 덮는 반투명 배경 */
export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  zIndex: 1000,
  // 앱 프레임이 세로 중앙에 있을 때 하단 시트가 너무 붙지 않도록 패딩
  padding: '16px',
  boxSizing: 'border-box',
  fontFamily: "'Pretendard', sans-serif", // ✅ 글꼴 강제 지정
  appearance: 'none', // ✅ 브라우저 기본 스타일 제거
  WebkitAppearance: 'none', // ✅ Safari 대응
});

/* 하단 시트(모달 본체) — 전역 max-width(=430px) 안으로 강제 */
export const modal = style({
  width: 'min(100%, var(--max-width))', // ✅ 전역 변수에 맞춤
  maxWidth: 'var(--max-width)', // ✅ 430px
  background: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  boxShadow: '0 -8px 40px rgba(0,0,0,0.15)',
  padding: '20px 16px 24px',
  maxHeight: '88vh',
  overflowY: 'auto',
  boxSizing: 'border-box',
  // iOS 안전영역 대응
  paddingBottom: 'max(24px, env(safe-area-inset-bottom))',
});

/* 헤더 */
export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 16,
});

export const title = style({
  flex: 1,
  textAlign: 'center',
  fontWeight: 700,
  fontSize: 18,
});

/* 폼 */
export const form = style({
  display: 'grid',
  rowGap: 12,
  padding: '4px 2px',
});
export const label = style({
  fontSize: 13,
  color: '#777',
  marginBottom: 4,
});
export const input = style({
  width: '100%',
  height: 44,
  padding: '0 14px',
  borderRadius: 12,
  border: '1px solid #E6E6E6',
  fontSize: 15,
  boxSizing: 'border-box',
  selectors: { '&:focus': { outline: '2px solid #cfe5ff', borderColor: '#9cc6ff' } },
});
export const textarea = style({
  width: '100%',
  minHeight: 72,
  padding: '10px 14px',
  borderRadius: 12,
  border: '1px solid #E6E6E6',
  fontSize: 15,
  resize: 'vertical',
  boxSizing: 'border-box',
  fontFamily: "'Pretendard', sans-serif", // ✅ 글꼴 강제 지정

  selectors: { '&:focus': { outline: '2px solid #cfe5ff', borderColor: '#9cc6ff' } },
});

/* 푸터 버튼 */
export const footer = style({
  marginTop: 18,
  display: 'grid',
  rowGap: 10,
});
export const saveBtn = style({
  height: 48,
  borderRadius: 12,
  border: 'none',
  background: '#9CC6FF',
  color: '#fff',
  fontWeight: 700,
  fontSize: 16,
  cursor: 'pointer',
  display: 'flex', // ✅ 추가
  alignItems: 'center', // ✅ 세로 가운데
  justifyContent: 'center', // ✅ 가로 가운데
  selectors: { '&:disabled': { opacity: 0.5, cursor: 'default' } },
});
export const deleteBtn = style({
  height: 44,
  borderRadius: 12,
  //border: '1px solid #FFD6D6',
  background: '#FFF2F2',
  color: '#D44',
  fontWeight: 600,
  fontSize: 15,
  cursor: 'pointer',
  display: 'flex', // ✅ 추가
  alignItems: 'center', // ✅ 세로 가운데
  justifyContent: 'center', // ✅ 가로 가운데
});
