// src/pages/home/page/Home.tsx
import { useNavigate } from 'react-router-dom';
import * as styles from './Home.css.ts';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {/* 날짜 & 인사말 */}
      <section className={styles.dateSection}>
        <p className={styles.date}>2025년 7월 14일 금요일</p>
        <p className={styles.greeting}>좋은 아침이에요!!</p>
      </section>

      {/* 날씨 카드 */}
      <section className={styles.weatherCard}>
        <div className={styles.weatherLeft}>
          <p className={styles.city}>서울시</p>
          <p className={styles.weather}>맑음</p>
        </div>
        <p className={styles.temp}>27℃</p>
      </section>

      {/* 메뉴 4칸 (2x2) */}
      <section className={styles.menuGrid}>
        {/* 채팅 */}
        <button className={styles.menuItem} type="button" onClick={() => navigate('/chat')}>
          <img src="/svgs/ic_home_chat.svg" alt="채팅 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>채팅</span>
        </button>

        {/* 회상 기록 */}
        <button className={styles.menuItem} type="button">
          <img src="/svgs/ic_home_history.svg" alt="회상 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>회상 기록</span>
        </button>

        {/* 일정 */}
        <button className={styles.menuItem} type="button" onClick={() => navigate('/schedule')}>
          <img src="/svgs/ic_home_calendar.svg" alt="일정 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>일정</span>
        </button>

        {/* 게임 */}
        <button className={styles.menuItem} type="button">
          <img src="/svgs/ic_home_game.svg" alt="게임 아이콘" className={styles.menuSvg} />
          <span className={styles.menuLabel}>게임</span>
        </button>
      </section>
    </div>
  );
};

export default Home;
