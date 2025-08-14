import { useState } from 'react';

import * as s from './MyPage.css';
import MealBlock from '../components/MealBlock';
import WakeupTimePicker from '../components/WakeupTimePicker';

import Button from '@/common/components/button/Button';
import { BREAKFAST_TIMES, LUNCH_TIMES, DINNER_TIMES } from '@/shared/constants/mealTimes';

const userData = {
  name: '김땡땡',
  email: 'email@example.com',
  verificationCode: '12345678',
};

const MyPage = () => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedHour, setSelectedHour] = useState(6);
  const [selectedMinute, setSelectedMinute] = useState(10);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>('PM');

  const [selectedBreakfast, setSelectedBreakfast] = useState('');
  const [selectedLunch, setSelectedLunch] = useState('');
  const [selectedDinner, setSelectedDinner] = useState('');

  const updateTime = (type: 'hour' | 'minute', direction: 'up' | 'down') => {
    if (type === 'hour') {
      setSelectedHour((prev) =>
        direction === 'up' ? (prev === 12 ? 1 : prev + 1) : prev === 1 ? 12 : prev - 1,
      );
    } else {
      setSelectedMinute((prev) => (direction === 'up' ? (prev + 1) % 60 : (prev - 1 + 60) % 60));
    }
  };

  const meals = [
    {
      title: '아침',
      times: BREAKFAST_TIMES,
      selected: selectedBreakfast,
      onSelect: setSelectedBreakfast,
    },
    { title: '점심', times: LUNCH_TIMES, selected: selectedLunch, onSelect: setSelectedLunch },
    { title: '저녁', times: DINNER_TIMES, selected: selectedDinner, onSelect: setSelectedDinner },
  ];

  return (
    <section className={s.container}>
      <h1 className={s.greet}>
        <span className={s.name}>{userData.name}</span>님, 안녕하세요!
      </h1>
      <div className={s.email}>{userData.email}</div>
      <div className={s.verification}>인증코드: {userData.verificationCode}</div>

      <div className={s.wakeupSection}>
        <div className={s.mealLabel}>기상 알림 시간 선택</div>
        <WakeupTimePicker
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          ampm={ampm}
          showTimePicker={showTimePicker}
          togglePicker={() => setShowTimePicker(!showTimePicker)}
          updateTime={updateTime}
          setAmpm={setAmpm}
        />
      </div>

      <div className={s.mealSection}>
        <div className={s.mealLabel}>식사 알림 시간 선택</div>
        {meals.map((meal) => (
          <MealBlock
            key={meal.title}
            title={meal.title}
            times={meal.times}
            selected={meal.selected}
            onSelect={meal.onSelect}
          />
        ))}
      </div>

      <Button variant="primary" label="저장" />
      <div className={s.logoutRow}>
        <button type="button" className={s.logoutLink}>
          로그아웃
        </button>
        <span className={s.divider}>|</span>
        <button type="button" className={s.logoutLink}>
          회원탈퇴
        </button>
      </div>
    </section>
  );
};

export default MyPage;
