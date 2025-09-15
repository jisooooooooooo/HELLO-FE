// src/pages/game/GameResults.tsx
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from './GameResults.css.ts';

type Player = { id: string; name: string; time: string };

export default function GameResults() {
  const navigate = useNavigate();

  // 👉 더미 데이터 (순위 1~10 가정)
  const allPlayers: Player[] = [
    { id: '01', name: '양서연', time: '05:20' },
    { id: '02', name: '임지수', time: '05:20' },
    { id: '03', name: '조소윤', time: '05:20' },
    { id: '04', name: '홍다인', time: '05:20' },
    { id: '05', name: '한가람', time: '05:20' },
    { id: '06', name: '정하린', time: '05:20' },
    { id: '07', name: '김민재', time: '05:20' },
    { id: '08', name: '소원', time: '05:20' }, // ← 현재 사용자
    { id: '09', name: '박지연', time: '05:20' },
    { id: '10', name: '최도윤', time: '05:20' },
  ];

  // 현재 사용자 (요청: 사용자를 8위로 가정)
  const myId = '08';
  const me = useMemo(() => allPlayers.find((p) => p.id === myId)!, [allPlayers]);

  // 스크롤 리스트는 1~10 전체를 그대로 보여줌
  const playersForList = allPlayers;

  return (
    <div className={s.wrap}>
      {/* 상단 제목 박스 */}
      <div className={s.titleBox}>
        <h1 className={s.titleText}>게임 결과입니다.</h1>
      </div>

      {/* ✅ 스크롤 전에도 '내 순위'가 보이도록 고정 카드 */}
      <div className={s.myCard} aria-label="내 순위">
        <span className={s.rankMe}>{me.id}</span>
        <span className={s.nameMe}>{me.name}</span>
        <span className={s.timePillMe}>{me.time}</span>
      </div>

      {/* ✅ 스크롤 가능한 전체 결과표 */}
      <div className={s.scrollWrap}>
        <ul className={s.listBox}>
          {playersForList.map((p) => {
            const isMe = p.id === myId;
            return (
              <li key={p.id} className={`${s.item} ${isMe ? s.itemMe : ''}`}>
                <span className={isMe ? s.rankMe : s.rank}>{p.id}</span>
                <span className={isMe ? s.nameMe : s.name}>{p.name}</span>
                <span className={isMe ? s.timePillMe : s.timePill}>{p.time}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 게임 시작 버튼 */}
      <button className={s.startBtn} onClick={() => navigate(PATH.GAME)}>
        게임 시작
      </button>
    </div>
  );
}
