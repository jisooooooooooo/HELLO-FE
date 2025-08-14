/* eslint-disable no-unused-vars */
import React from 'react';

import * as s from '../page/MyPage.css';

import { IcUparrow, IcDownarrow, IcClock } from '@/assets/svgs';

interface WakeupTimePickerProps {
  selectedHour: number;
  selectedMinute: number;
  ampm: 'AM' | 'PM';
  showTimePicker: boolean;
  togglePicker: () => void;
  updateTime: (_type: 'hour' | 'minute', _direction: 'up' | 'down') => void;
  setAmpm: React.Dispatch<React.SetStateAction<'AM' | 'PM'>>;
}

const WakeupTimePicker = ({
  selectedHour,
  selectedMinute,
  ampm,
  showTimePicker,
  togglePicker,
  updateTime,
  setAmpm,
}: WakeupTimePickerProps) => {
  const formattedTime = `${selectedHour} : ${selectedMinute.toString().padStart(2, '0')} ${ampm}`;
  return (
    <div className={s.inputGroup}>
      <div
        id="time"
        className={s.input}
        role="button"
        aria-expanded={showTimePicker}
        tabIndex={0}
        onClick={togglePicker}
      >
        <span className={s.timeTextLabel}>{formattedTime}</span>
        <IcClock className={s.clockIcon} />
      </div>

      {showTimePicker && (
        <div className={s.timePicker}>
          <div className={s.timeRow}>
            <button type="button" onClick={() => updateTime('hour', 'up')}>
              <IcUparrow className={s.arrowIcon} />
            </button>
            <span className={s.timeText}>{selectedHour}</span>
            <button type="button" onClick={() => updateTime('hour', 'down')}>
              <IcDownarrow className={s.arrowIcon} />
            </button>
          </div>
          <div className={s.timeRow}>
            <button type="button" onClick={() => updateTime('minute', 'up')}>
              <IcUparrow className={s.arrowIcon} />
            </button>
            <span className={s.timeText}>{selectedMinute.toString().padStart(2, '0')}</span>
            <button type="button" onClick={() => updateTime('minute', 'down')}>
              <IcDownarrow className={s.arrowIcon} />
            </button>
          </div>
          <div className={s.ampmRow}>
            {['AM', 'PM'].map((meridiem) => (
              <button
                key={meridiem}
                type="button"
                className={ampm === meridiem ? s.active : ''}
                aria-pressed={ampm === meridiem}
                onClick={() => setAmpm(meridiem as 'AM' | 'PM')}
              >
                {meridiem}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WakeupTimePicker;
