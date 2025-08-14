import * as s from '../page/MyPage.css';

type MealBlockProps = {
  title: string;
  times: string[];
  selected: string;
  // eslint-disable-next-line no-unused-vars
  onSelect: (time: string) => void;
};

function MealBlock({ title, times, selected, onSelect }: MealBlockProps) {
  return (
    <div className={s.mealBlock}>
      <div className={s.mealTitle}>{title}</div>
      <div className={s.mealGrid}>
        {times.map((timeValue) => (
          <button
            key={timeValue}
            className={`${s.mealButton} ${selected === timeValue ? s.mealButtonActive : ''}`}
            onClick={() => onSelect(timeValue)}
          >
            {timeValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MealBlock;
