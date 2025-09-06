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

        <div className={styles.tempWrap}>
          <img src="/svgs/home/thermo.svg" alt="" aria-hidden className={styles.thermo} />
          <p className={styles.temp}>27℃</p>
        </div>
      </section>

      {/* 챗봇 CTA (풀폭, 파란카드) */}
      <section className={styles.chatCta} aria-label="챗봇과 대화하기">
        <div className={styles.chatTexts}>
          <h2 className={styles.chatTitle}>챗봇과 대화하기</h2>
          <p className={styles.chatDesc}>버튼을 눌러 챗봇과 대화해보세요</p>
          <button type="button" className={styles.chatButton} onClick={() => navigate('/chat')}>
            채팅하러 가기
          </button>
        </div>
        <img src="/svgs/home/chat_bubbles.svg" alt="" aria-hidden className={styles.chatArt} />
      </section>

      {/* 2칸 그리드: 회상기록 / 게임 */}
      <section className={styles.gridTwo}>
        <button type="button" className={styles.cardMemo} onClick={() => navigate('/reminisce')}>
          <div className={styles.cardTextBlock}>
            <p className={styles.cardTitle}>회상기록</p>
            <p className={styles.cardSub}>
              지난날의 추억을
              <br />
              정리해 주세요
            </p>
          </div>
          <img src="/svgs/home/reminisce_book.svg" alt="" aria-hidden className={styles.cardArt} />
        </button>

        <button type="button" className={styles.cardGame}>
          <div className={styles.cardTextBlock}>
            <p className={styles.cardTitle}>게임</p>
            <p className={styles.cardSub}>
              간단한 게임을
              <br />
              즐겨 보세요!
            </p>
          </div>
          <img src="/svgs/home/game_puzzle.svg" alt="" aria-hidden className={styles.cardArt} />
        </button>
      </section>

      {/* 일정 카드 (풀폭, 연한 하늘색) */}
      <section className={styles.scheduleCard}>
        <div className={styles.cardTextBlock}>
          <p className={styles.cardTitle}>일정</p>
          <p className={styles.cardSub}>일정들을 확인해 보세요</p>
        </div>
        <img src="/svgs/home/calendar.svg" alt="" aria-hidden className={styles.scheduleArt} />
        <button
          type="button"
          className={styles.scheduleOverlay}
          onClick={() => navigate('/schedule')}
          aria-label="일정 화면으로 이동"
        />
      </section>
    </div>
  );
};

export default Home;
