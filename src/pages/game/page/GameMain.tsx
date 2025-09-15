// src/pages/game/GameMain.tsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from './GameMain.css.ts';

/* ✅ 상단 날짜 포맷 (오늘) */
function useTodayKor() {
  return useMemo(() => {
    const d = new Date();
    const KOR_WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    const big = d.getDate();
    const sub = `${KOR_WEEKDAY[d.getDay()]}요일`;
    const sub2 = `${d.getFullYear()}년 ${d.getMonth() + 1}월`;
    return { big, sub, sub2 };
  }, []);
}

/* ✅ 얇은 트랙 + 두꺼운 진행 + 둥근 끝 Progress Ring */
function ProgressRing({ percent, label }: { percent: number; label: string }) {
  const size = 90;

  // 서로 다른 두께
  const trackStroke = 6; // 얇은 바닥링
  const progStroke = 12; // 두꺼운 진행링 (끝 둥글게)

  // 가장 두꺼운 스트로크 기준으로 반지름 계산 (클리핑 방지)
  const r = (size - Math.max(trackStroke, progStroke)) / 2;
  const c = 2 * Math.PI * r;

  const clamped = Math.max(0, Math.min(100, percent));
  const dash = (clamped / 100) * c;

  return (
    <div className={s.ringWrap} aria-label={`연속 학습 ${label}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* 얇은 배경 링 */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth={trackStroke}
        />
        {/* 두꺼운 진행 링 (라운드 캡, 12시 시작) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#ffffff"
          strokeWidth={progStroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${c - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* 중앙 텍스트 */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="18"
          fontWeight="800"
          fill="#ffffff"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

export default function GameMain() {
  const navigate = useNavigate();
  const { big, sub, sub2 } = useTodayKor();

  // TODO: 실제 데이터로 교체
  const streakDays = 5;
  const targetDays = 7;
  const percent = (streakDays / targetDays) * 100;

  return (
    <div className={s.wrap}>
      {/* ✅ 상단 날짜 */}
      <section className={s.dateWrap}>
        <div className={s.dateBig}>{big}</div>
        <div className={s.dateMeta}>
          <div className={s.dateDow}>{sub}</div>
          <div className={s.dateYearMonth}>{sub2}</div>
        </div>
      </section>

      {/* 상단 연속 학습 카드 */}
      <section className={s.streakCard} aria-label="학습 현황">
        <p className={s.streakText}>
          {`잘하고 있어요!\n${streakDays}일 연속으로\n공부하고 있습니다`}
        </p>
        <ProgressRing percent={percent} label={`${streakDays}일`} />
      </section>

      {/* 오늘의 추천 게임 */}
      <h2 className={s.sectionTitle}>오늘의 추천 게임</h2>

      {/* 1행 2열 */}
      <section className={s.twoCols}>
        {/* 왼쪽 열 */}
        <div className={s.col}>
          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/vocab`)}
            aria-label="단어카드 보러가기"
            title="단어카드 보러가기"
          >
            <img className={s.img} src="/svgs/game_vocab_review.svg" alt="단어카드 보러가기" />
          </button>

          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(`${PATH.GAME}/chat-study`)}
            aria-label="대화 내용으로 언어 공부 해보기"
            title="대화 내용으로 언어 공부 해보기"
          >
            <img
              className={s.img}
              src="/svgs/game_study_from_chat.svg"
              alt="대화 내용으로 언어 공부 해보기"
            />
          </button>
        </div>

        {/* 오른쪽 열 */}
        <div className={s.col}>
          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(PATH.GAME)}
            aria-label="같은 그림 카드 찾기"
            title="같은 그림 카드 찾기"
          >
            <img className={s.img} src="/svgs/game_picture_match.svg" alt="같은 그림 카드 찾기" />
          </button>

          <button
            type="button"
            className={s.imgButton}
            onClick={() => navigate(PATH.GAME_RESULTS)}
            aria-label="게임 결과 보러가기"
            title="게임 결과 보러가기"
          >
            <img className={s.img} src="/svgs/game_view_results.svg" alt="게임 결과 보러가기" />
          </button>
        </div>
      </section>
    </div>
  );
}
