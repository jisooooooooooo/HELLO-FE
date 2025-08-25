import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './ChatList.css.ts';

type ChatItem = {
  id: number;
  title: string;
  date: string; // "YYYY-MM-DD"
};

const MOCK_LIST: ChatItem[] = [
  { id: 1, title: '날씨에 관한 대화', date: '2025-07-21' },
  { id: 2, title: '마음이 편안해지는 시간', date: '2025-07-21' },
  { id: 3, title: '진달래가 피던 봄날', date: '2025-07-21' },
];

const formatKoreanDate = (iso: string) => {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}년 ${m}월 ${day}일`;
};

const ChatList = () => {
  const navigate = useNavigate();

  const handleOpen = (id: number) => {
    navigate(`/chat/${id}`);
  };

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.stopPropagation();
    // TODO: 삭제 로직 연결
    alert('삭제');
  };

  return (
    <div className={styles.wrap}>
      <ul className={styles.list}>
        {MOCK_LIST.map((item) => (
          <li key={item.id} className={styles.row}>
            {/* 메인 클릭 영역을 버튼으로 */}
            <button type="button" className={styles.rowMain} onClick={() => handleOpen(item.id)}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.date}>{formatKoreanDate(item.date)}</div>
            </button>

            {/* 삭제 버튼 */}
            <button
              type="button"
              className={styles.trashBtn}
              aria-label="삭제"
              onClick={handleDelete}
            >
              <img src="/svgs/ic_trash.svg" alt="삭제" className={styles.trashIcon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
