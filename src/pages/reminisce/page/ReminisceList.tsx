import { useNavigate } from 'react-router-dom';

import * as s from './ReminisceList.css';
import { mockNotes } from '../mocks/reminisce.mock';

import Button from '@/common/components/button/Button';
import { IcCalendar, IcPlus } from '@/assets/svgs';
import { REMINISCE_PATH } from '@/shared/constants/path';

const ReminisceList = () => {
  const navigate = useNavigate();

  const handleDetailClick = (id: number) => {
    navigate(REMINISCE_PATH.DETAIL(id));
  };

  const handleDetailButtonClick = (id: number) => {
    handleDetailClick(id);
  };

  const handleNewReminisceClick = () => {
    navigate(REMINISCE_PATH.NEW);
  };

  return (
    <section className={s.container}>
      <h1 className={s.pageTitle}>오늘도 기억을 담아볼까요?</h1>

      <ul className={s.list}>
        {mockNotes.map((note) => (
          <li key={note.id} className={s.card}>
            <div className={s.cardTitle}>{note.title}</div>
            <div className={s.cardDateContainer}>
              <IcCalendar className={s.cardDateIcon} />
              <div className={s.cardDate}>{note.dateText}</div>
            </div>
            <p className={s.cardSummary}>{note.summary}</p>
            <button
              type="button"
              className={s.cardCta}
              onClick={() => handleDetailButtonClick(note.id)}
            >
              자세히 보기 &gt;
            </button>
          </li>
        ))}
      </ul>

      <div className={s.buttonContainer}>
        <Button
          variant="secondary"
          label="새로운 회상 작성하기"
          icon={<IcPlus />}
          onClick={handleNewReminisceClick}
        />
      </div>
    </section>
  );
};

export default ReminisceList;
