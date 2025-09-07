import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as s from './ReminisceList.css';
import CaretIcon from '../components/CaretIcon';

import mm from '@/assets/images/mm.png';
import Button from '@/common/components/button/Button';
import { IcPlus } from '@/assets/svgs';
import { REMINISCE_PATH } from '@/shared/constants/path';
import { mockNotes } from '@/pages/reminisce/mocks/reminisce';

const ReminisceList = () => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<number | null>(null);

  const handleNewReminisceClick = () => {
    navigate(REMINISCE_PATH.NEW);
  };

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={s.container}>
      <header className={s.header}>
        <h1 className={s.pageTitle}>회상 노트</h1>
        <p className={s.pageSubtitle}>매일매일 작성했던 답변을 확인해보세요</p>
      </header>

      <img src={mm} alt="먼지" aria-hidden className={s.decorImage} />

      <ul className={s.noteList}>
        {mockNotes.map(({ id, dateText, title, content }) => {
          const isOpen = openId === id;
          const contentId = `note-${id}`;
          return (
            <li key={id}>
              <article className={s.card}>
                <div className={s.dateLabel}>{dateText}</div>

                <button
                  type="button"
                  className={s.titleRow}
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(id)}
                >
                  <span className={s.titleText}>{title}</span>
                  <span className={`${s.caret} ${isOpen ? s.caretOpen : ''}`} aria-hidden>
                    <CaretIcon />
                  </span>
                </button>

                <div id={contentId} className={`${s.content} ${isOpen ? s.contentOpen : ''}`}>
                  {isOpen && <p className={s.contentText}>{content}</p>}
                </div>
              </article>
            </li>
          );
        })}
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
