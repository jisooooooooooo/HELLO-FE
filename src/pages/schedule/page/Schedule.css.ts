import { style, globalStyle } from '@vanilla-extract/css';

import { colors } from '@/styles/token/color.css';
import { fonts } from '@/styles/token/typography.css';

/* ===== 공통 레이아웃 ===== */
export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  background: colors.white01,
  paddingInline: '1.6rem',
  writingMode: 'horizontal-tb', // ✅ 가로 고정
});

/* ===== 상단 날짜 헤더 ===== */
export const header = style({
  borderBottom: `1px solid ${colors.grey10}`,
  padding: '1.2rem 0',
});

export const headerInner = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr', // [큰 숫자] [텍스트들]
  gridTemplateRows: 'auto auto', // [요일] [연-월]
  columnGap: '1.2rem',
  alignItems: 'end',
});

/* 왼쪽 큰 숫자: 오른쪽 두 줄(요일/연월)을 세로로 모두 덮음 */
export const headerDateBig = style({
  gridRow: '1 / span 2', // ✅ 두 줄 모두 덮기
  alignSelf: 'stretch',
  display: 'flex',
  alignItems: 'center', // 세로 중앙
  fontSize: '4.6rem', // ✅ 더 크게
  fontWeight: 700,
  lineHeight: 1,
  color: colors.black01,
});

/* 오른쪽 텍스트 두 줄 */
export const headerDateMeta = style({
  display: 'contents', // grid에서 자식만 배치
});
export const headerDow = style({
  gridColumn: 2,
  gridRow: 1,
  ...fonts.subtitle05, // 1.8rem / 500
  color: colors.grey06,
});
export const headerYearMonth = style({
  gridColumn: 2,
  gridRow: 2,
  ...fonts.caption02, // 1.2rem / 500
  color: colors.grey06,
});

/* ===== 주간 스트립 ===== */
export const weekStrip = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.6rem',
  padding: '1.2rem 0',
  borderBottom: `1px solid ${colors.grey10}`,
});
export const dayBox = style({
  display: 'grid',
  placeItems: 'center',
  gap: '0.4rem',
  padding: '1rem 0', // 터치 타깃 확대
  borderRadius: '0.8rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  selectors: { '&:hover': { background: colors.grey11 } },
});
export const dayBoxActive = style({
  background: colors.blue01,
  boxShadow: `inset 0 0 0 2px ${colors.blue03}`, // 시인성 ↑
});
export const dayBoxToday = style({
  background: colors.blue03, // 오늘 파란색
  boxShadow: `inset 0 0 0 2px ${colors.blue03}`,
});
export const dayDow = style({
  ...fonts.body04, // 1.4rem / 700
  color: colors.grey06,
});
export const dayDate = style({
  ...fonts.title04, // 2.4rem / 600
  lineHeight: '120%',
  color: colors.black01,
});
export const dayTextToday = style({
  color: colors.white01, // 오늘일 때 텍스트 색
});

/* ===== 타임라인 헤더 (시간 | 일정) ===== */
export const timelineHeader = style({
  display: 'grid',
  gridTemplateColumns: '11rem 1px 1fr', // [시간] | [세로줄] | [일정]
  alignItems: 'center',
  columnGap: '1.2rem',
  padding: '1.2rem 0 0.6rem',
  color: colors.grey06,
});

/* 왼쪽 라벨: 1열 */
export const tlLabelTime = style({
  ...fonts.body02,
  justifySelf: 'start',
  writingMode: 'horizontal-tb',
});

/* 가운데 세로 구분선: 2열 */
export const tlHeaderDivider = style({
  width: '1px',
  height: '1.6rem',
  background: colors.grey10,
  justifySelf: 'stretch',
});

/* 오른쪽 라벨: 3열 */
export const tlLabelEvent = style({
  ...fonts.body02,
  justifySelf: 'start',
  writingMode: 'horizontal-tb', // ✅ 혹시 모를 전역 영향 차단
  wordBreak: 'keep-all',
});

/* ===== 타임라인 리스트 ===== */
export const timelineList = style({
  flex: 1,
  overflowY: 'auto',
  padding: '0.8rem 0 2.4rem',
});
export const tlRow = style({
  display: 'grid',
  // 왼쪽 11rem | 세로줄 1px | 오른쪽 카드
  gridTemplateColumns: '11rem 1px 1fr',
  alignItems: 'start',
  columnGap: '1.2rem',
  padding: '1.2rem 0',
});

/* 왼쪽 컬럼(시간/소일자/체크) */
export const timeCol = style({
  display: 'grid',
  gridTemplateRows: 'auto auto auto',
  rowGap: '0.6rem',
  justifyItems: 'start',
});
export const timeText = style({
  ...fonts.subtitle02, // 2rem / 600
  color: colors.black01,
});
export const timeYmd = style({
  ...fonts.body03, // 1.6rem / 400
  color: colors.grey06,
});
export const timeMarks = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
});

/* 세로 구분선 */
export const vDivider = style({
  width: '1px',
  height: '100%',
  background: colors.grey10,
  alignSelf: 'stretch',
});

/* 오른쪽 카드 컬럼 */
export const cardsCol = style({
  display: 'grid',
  gap: '1rem',
});

/* 카드 */
export const card = style({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'center',
  borderRadius: '1.4rem',
  background: colors.grey11,
  border: 'none',
  padding: '1.6rem',
  writingMode: 'horizontal-tb', // ✅
  wordBreak: 'keep-all',
});
/* 오늘 날짜 카드 전용 스타일 */
export const cardToday = style({
  background: colors.blue03, // ✅ 요청: blue03로 채움
  // 테두리 없음 유지
});
export const cardInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  writingMode: 'horizontal-tb', // ✅
  wordBreak: 'keep-all',
});
export const cardTitle = style({
  ...fonts.subtitle02, // 2rem / 600
  color: colors.black01,
  writingMode: 'horizontal-tb', // ✅
  wordBreak: 'keep-all',
});
export const cardPlace = style({
  ...fonts.body02, // 1.6rem / 500
  color: colors.black01,
  writingMode: 'horizontal-tb', // ✅
  wordBreak: 'keep-all',
});
export const cardNote = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginTop: '0.2rem',
  ...fonts.body05, // 1.4rem / 400
  color: colors.grey02,
  writingMode: 'horizontal-tb', // ✅
  wordBreak: 'keep-all',
});
export const noteDot = style({
  width: '0.8rem',
  height: '0.8rem',
  borderRadius: '50%',
  background: colors.grey02,
});
export const cardMore = style({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '0.8rem',
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
});

/* ===== 체크박스 (사각형 아이콘 + 체크 시 검정 틱) ===== */
export const checkboxWrap = style({
  position: 'relative',
  width: '2.4rem', // 터치 타깃 확대
  height: '2.4rem',
  display: 'inline-block',
  cursor: 'pointer',
});
export const checkInput = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  opacity: 0,
  cursor: 'pointer',
});
export const checkRect = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  display: 'block',
  pointerEvents: 'none',
});
export const checkTick = style({
  position: 'absolute',
  left: '0.7rem',
  top: '0.35rem',
  width: '0.8rem',
  height: '1.2rem',
  border: 'solid black', // 검정 틱
  borderWidth: '0 0.26rem 0.26rem 0',
  transform: 'rotate(45deg)',
  opacity: 0, // 기본 숨김
  transition: 'opacity 120ms ease',
  pointerEvents: 'none',
});
globalStyle(`${checkInput}:checked ~ ${checkTick}`, {
  opacity: 1,
});

/* ===== 빈 상태 ===== */
export const empty = style({
  textAlign: 'center',
  color: colors.grey06,
  padding: '3.2rem 0',
  ...fonts.body02, // 1.6rem / 500
});
