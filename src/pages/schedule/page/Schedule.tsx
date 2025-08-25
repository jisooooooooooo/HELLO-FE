import { useState } from 'react';

import * as styles from './Schedule.css';

type ScheduleItem = {
  id: string;
  time: string; // "11시30분"
  ymd: string; // yyyy-mm-dd (필터/정렬용)
  ymdLabel: string; // "7월24일" 표시용
  title: string;
  place?: string;
  note?: string;
  done?: boolean;
};

const KOR_WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`;
}
function startOfWeek(d: Date) {
  const s = new Date(d);
  s.setHours(0, 0, 0, 0);
  s.setDate(s.getDate() - s.getDay()); // 일요일
  return s;
}
function endOfWeek(d: Date) {
  const e = startOfWeek(d);
  e.setDate(e.getDate() + 6); // 토요일
  return e;
}
function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}
function formatHeader(d: Date) {
  const yyyy = d.getFullYear();
  const m = d.getMonth() + 1;
  const dow = KOR_WEEKDAY[d.getDay()];
  return { big: d.getDate(), sub: `${dow}요일`, sub2: `${yyyy}년 ${m}월` };
}
function labelFromDate(d: Date) {
  return `${d.getMonth() + 1}월${d.getDate()}일`;
}

/* 오늘 기준 더미 데이터 */
const today = new Date();
today.setHours(0, 0, 0, 0);
const todayKey = ymd(today);
const todayLabel = labelFromDate(today);

// 내일 & 모레
const tomorrow = addDays(today, 1);
const tomorrowKey = ymd(tomorrow);
const tomorrowLabel = labelFromDate(tomorrow);

const afterTomorrow = addDays(today, 2);
const afterTomorrowKey = ymd(afterTomorrow);
const afterTomorrowLabel = labelFromDate(afterTomorrow);

const MOCK: Record<string, ScheduleItem[]> = {
  [todayKey]: [
    {
      id: 'a',
      time: '9시00분',
      ymd: todayKey,
      ymdLabel: todayLabel,
      title: '투썸플레이스',
      place: '잠실 지점',
      note: '8월 25일에 입력한 일정입니다.',
      done: true,
    },
  ],
  [tomorrowKey]: [
    {
      id: 'b',
      time: '13시15분',
      ymd: tomorrowKey,
      ymdLabel: tomorrowLabel,
      title: '노래 교실',
      place: '송파구민회관',
      note: '7월 15일에 입력한 일정입니다.',
    },
  ],
  [afterTomorrowKey]: [
    {
      id: 'c',
      time: '15시00분',
      ymd: afterTomorrowKey,
      ymdLabel: afterTomorrowLabel,
      title: '운동 모임',
      place: '체육관',
      note: '8월 15일에 입력한 일정입니다.',
    },
    {
      id: 'd',
      time: '19시00분',
      ymd: afterTomorrowKey,
      ymdLabel: afterTomorrowLabel,
      title: '저녁 약속',
      place: '강남역',
      note: '7월 9일에 입력한 일정입니다.',
    },
  ],
};

/* 시간 단위 그룹 */
function groupByTime(items: ScheduleItem[]) {
  const map = new Map<string, ScheduleItem[]>();
  items.forEach((it) => {
    if (!map.has(it.time)) {
      map.set(it.time, []);
    }
    map.get(it.time)!.push(it);
  });
  return Array.from(map.entries()); // 데이터 순서 유지
}

/* 선택한 날 ~ 그 주 토요일까지 일정 모으기 */
const getWeekTrailItems = (fromDate: Date): ScheduleItem[] => {
  const last = endOfWeek(fromDate);
  const out: ScheduleItem[] = [];

  for (let d = new Date(fromDate); d.getTime() <= last.getTime(); d = addDays(d, 1)) {
    const key = ymd(d);
    const arr = MOCK[key];
    if (arr && arr.length) {
      out.push(...arr);
    }
  }
  return out;
};

const Schedule = () => {
  const [selected, setSelected] = useState<Date>(today);

  // 헤더 날짜
  const { big, sub, sub2 } = formatHeader(selected);

  // 주간 스트립(일~토)
  const sow = startOfWeek(selected);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(sow, i));

  // 타임라인 데이터: “선택일 ~ 토요일”
  const items = getWeekTrailItems(selected);
  const grouped = groupByTime(items);

  return (
    <div className={styles.wrap}>
      {/* 상단 날짜 헤더 */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerDateBig}>{big}</div>
          <div className={styles.headerDateMeta}>
            <div className={styles.headerDow}>{sub}</div>
            <div className={styles.headerYearMonth}>{sub2}</div>
          </div>
        </div>
      </header>

      {/* 주간 스트립 */}
      <section className={styles.weekStrip}>
        {weekDays.map((d) => {
          const key = ymd(d);
          const isSelected = key === ymd(selected);
          const isToday = key === ymd(today);
          return (
            <button
              key={key}
              type="button"
              className={[
                styles.dayBox,
                isSelected ? styles.dayBoxActive : '',
                isToday ? styles.dayBoxToday : '',
              ].join(' ')}
              onClick={() => setSelected(d)}
            >
              <div className={[styles.dayDow, isToday ? styles.dayTextToday : ''].join(' ')}>
                {KOR_WEEKDAY[d.getDay()]}
              </div>
              <div className={[styles.dayDate, isToday ? styles.dayTextToday : ''].join(' ')}>
                {d.getDate()}
              </div>
            </button>
          );
        })}
      </section>

      {/* 타임라인 헤더 (시간 | 일정) */}
      <div className={styles.timelineHeader}>
        <span className={styles.tlLabelTime}>시간</span>
        <span className={styles.tlHeaderDivider} aria-hidden />
        <span className={styles.tlLabelEvent}>일정</span>
      </div>

      {/* 타임라인 리스트 */}
      <section className={styles.timelineList}>
        {grouped.length === 0 ? (
          <div className={styles.empty}>등록된 일정이 없습니다.</div>
        ) : (
          grouped.map(([time, arr]) => (
            <div key={time} className={styles.tlRow}>
              {/* 왼쪽: 시간/작은 날짜/체크 */}
              <div className={styles.timeCol}>
                <div className={styles.timeText}>{time}</div>
                <div className={styles.timeYmd}>{arr[0]?.ymdLabel ?? ''}</div>

                <div className={styles.timeMarks}>
                  <label className={styles.checkboxWrap} title="완료">
                    {/* 상태는 input이 가짐 */}
                    <input
                      type="checkbox"
                      defaultChecked={arr[0]?.done}
                      className={styles.checkInput}
                    />
                    {/* 항상 보이는 사각형 아이콘 */}
                    <img src="/svgs/ic_schedule_rect.svg" alt="" className={styles.checkRect} />
                    {/* 체크되면 보이는 검정 틱 */}
                    <span className={styles.checkTick} />
                  </label>
                </div>
              </div>

              {/* 세로 구분선 */}
              <div className={styles.vDivider} aria-hidden />

              {/* 오른쪽: 카드들 */}
              <div className={styles.cardsCol}>
                {arr.map((it) => {
                  const isTodayCard = it.ymd === todayKey; // ✅ 오늘 일정만 파란색
                  return (
                    <article
                      key={it.id}
                      className={[styles.card, isTodayCard ? styles.cardToday : ''].join(' ')}
                    >
                      <div className={styles.cardInner}>
                        <div className={styles.cardTitle}>{it.title}</div>
                        {it.place && <div className={styles.cardPlace}>{it.place}</div>}
                        {it.note && (
                          <div className={styles.cardNote}>
                            <span className={styles.noteDot} />
                            {it.note}
                          </div>
                        )}
                      </div>

                      <button type="button" className={styles.cardMore} aria-label="더보기">
                        <img src="/svgs/ic_schedule_more.svg" alt="" />
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default Schedule;
