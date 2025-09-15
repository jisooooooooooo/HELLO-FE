// src/pages/game/GameResults.css.ts
import { style } from '@vanilla-extract/css';

// 🎨 색상 가이드
const bgBox = '#F6F9FE'; // 제목 박스 & 표 배경
const pillBlue = '#005BBF'; // 시간 알약
const btnBlue = '#A4D5FF'; // 게임 시작 버튼
const meRowBg = '#EAF3FF'; // 내 순위 행 강조(박스보다 살짝 짙은 파랑 톤)

export const wrap = style({
  minHeight: '100vh',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '36px 16px 40px',
  gap: '16px',
});

/* 상단 제목 박스 */
export const titleBox = style({
  width: 325,
  height: 84,
  background: bgBox,
  marginBottom: 20,
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
});

export const titleText = style({
  fontSize: 20,
  fontWeight: 700,
  color: '#000',
  textAlign: 'center',
});

/* ===== 내 순위 고정 카드 ===== */
export const myCard = style({
  width: 325,
  height: 64,
  marginBottom: 10,
  background: bgBox,
  borderRadius: 16,
  display: 'grid',
  gridTemplateColumns: '48px 1fr auto',
  alignItems: 'center',
  padding: '0 16px 0 20px',
  gap: 12,
  border: `1.5px solid ${pillBlue}`, // 선으로 강조
});

export const rankMe = style({
  fontSize: 16,
  fontWeight: 800,
  color: '#000',
});

export const nameMe = style({
  fontSize: 18,
  fontWeight: 800,
  color: '#000',
});

export const timePillMe = style({
  minWidth: 74,
  padding: '8px 14px',
  borderRadius: 999,
  background: pillBlue,
  color: '#fff',
  fontSize: 16,
  fontWeight: 800,
  textAlign: 'center',
});

/* ===== 스크롤 가능한 리스트 ===== */
export const scrollWrap = style({
  width: 325,
  maxHeight: 280, // ✅ 스크롤 영역 높이
  overflowY: 'auto',
  borderRadius: 20,
  // 바깥 그림자
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
});

export const listBox = style({
  background: bgBox,
  borderRadius: 20,
  padding: '8px 0',
});

export const item = style({
  display: 'grid',
  gridTemplateColumns: '48px 1fr auto',
  alignItems: 'center',
  padding: '16px 24px 16px 20px',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
  },
});

export const itemMe = style({
  background: meRowBg, // ✅ 내 순위 행 배경 강조
});

export const rank = style({
  fontSize: 16,
  fontWeight: 600,
  color: '#333',
});

export const name = style({
  fontSize: 18,
  fontWeight: 600,
  color: '#333',
});

export const timePill = style({
  minWidth: 74,
  padding: '8px 14px',
  borderRadius: 999,
  background: pillBlue,
  color: '#fff',
  fontSize: 16,
  fontWeight: 700,
  textAlign: 'center',
});

/* 게임 시작 버튼 (표보다 작게) */
export const startBtn = style({
  width: 260,
  height: 45,
  marginTop: 10,
  border: 'none',
  borderRadius: 16,
  background: btnBlue,
  color: '#000',
  fontSize: 18,
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  //cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  transition: 'transform .05s ease, filter .15s ease',
  selectors: {
    '&:hover': { filter: 'brightness(1.05)' },
    '&:active': { transform: 'translateY(1px)' },
  },
});
