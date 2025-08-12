import { useParams } from 'react-router-dom';

import * as s from './ReminisceDetail.css';

import Button from '@/common/components/button/Button';
import { IcCalendar, IcEdit } from '@/assets/svgs';
import { mockNoteDetails } from '@/pages/reminisce/mocks/reminisce.mock';

const ReminisceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const mockDetail = mockNoteDetails.find((note) => note.id === Number(id));

  if (!mockDetail) {
    return <div>해당 회상을 찾을 수 없습니다.</div>;
  }

  return (
    <section className={s.container}>
      <div className={s.dateContainer}>
        <IcCalendar className={s.dateIcon} />
        <div className={s.date}>{mockDetail.date}</div>
      </div>
      <div className={s.card}>
        <h1 className={s.title}>{mockDetail.title}</h1>
        <p className={s.content}>{mockDetail.content}</p>
      </div>
      <div className={s.buttonContainer}>
        <Button variant="secondary" label="편집하기" icon={<IcEdit />} />
      </div>
    </section>
  );
};

export default ReminisceDetail;
