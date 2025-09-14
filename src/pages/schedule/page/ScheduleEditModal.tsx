import { useEffect, useMemo, useState } from 'react';
import type React from 'react';

import * as s from './ScheduleEditModal.css';

export type ScheduleEditInit = {
  id: string;
  title: string;
  place?: string;
  note?: string;
  date: string; // yyyy-mm-dd
  time: string; // "HH시MM분" 예: "09시00분"
};

type Props = {
  initial: ScheduleEditInit;
  onClose: () => void;
  onSave: (data: ScheduleEditInit) => void;
  onDelete: (id: string) => void;
};

/** "09시05분" -> "09:05" (time input 값) */
function toTimeInputValue(label: string) {
  const m = label.match(/^(\d{1,2})시\s?(\d{1,2})분$/);
  if (!m) {
    return '09:00';
  }
  const hh = String(Number(m[1])).padStart(2, '0');
  const mm = String(Number(m[2])).padStart(2, '0');
  return `${hh}:${mm}`;
}

/** "09:05" -> "09시05분" (저장용 라벨) */
function toTimeLabel(hhmm: string) {
  const [h = '09', m = '00'] = hhmm.split(':');
  return `${String(Number(h)).padStart(2, '0')}시${String(Number(m)).padStart(2, '0')}분`;
}

export default function ScheduleEditModal({ initial, onClose, onSave, onDelete }: Props) {
  const [title, setTitle] = useState(initial.title ?? '');
  const [place, setPlace] = useState(initial.place ?? '');
  const [note, setNote] = useState(initial.note ?? '');
  const [date, setDate] = useState(initial.date);
  const [timeInput, setTimeInput] = useState(toTimeInputValue(initial.time));

  const canSave = useMemo(() => title.trim().length > 0 && date.length === 10, [title, date]);

  // ESC 로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // 오버레이 클릭 시 닫기 (모달 내부 클릭은 전파 중단)
  const closeOnOverlay = () => onClose();
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={s.overlay} onClick={closeOnOverlay}>
      <div className={s.modal} onClick={stop}>
        <header className={s.header}>
          <button type="button" aria-label="닫기" onClick={onClose}>
            <img src="/svgs/ic_back.svg" alt="뒤로가기" /> {/* ✅ 아이콘 변경 */}
          </button>
          <h2 className={s.title}>일정 수정하기</h2>
          <div style={{ width: 36 }} />
        </header>

        <div className={s.form}>
          <div>
            <div className={s.label}>📝 일정 제목</div>
            <input className={s.input} value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <div className={s.label}>📍 장소</div>
            <input className={s.input} value={place} onChange={(e) => setPlace(e.target.value)} />
          </div>

          <div>
            <div className={s.label}>📅 날짜</div>
            <input
              className={s.input}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <div className={s.label}>⏰ 시간</div>
            <input
              className={s.input}
              type="time"
              value={timeInput}
              onChange={(e) => setTimeInput(e.target.value)}
            />
          </div>

          <div>
            <div className={s.label}>🗒 메모</div>
            <textarea
              className={s.textarea}
              placeholder="메모를 입력하세요"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
        </div>

        <footer className={s.footer}>
          <button
            className={s.saveBtn}
            disabled={!canSave}
            onClick={() =>
              onSave({
                id: initial.id,
                title: title.trim(),
                place: place.trim(),
                note: note.trim(),
                date,
                time: toTimeLabel(timeInput),
              })
            }
          >
            수정 완료
          </button>
          <button className={s.deleteBtn} onClick={() => onDelete(initial.id)}>
            일정 삭제
          </button>
        </footer>
      </div>
    </div>
  );
}
