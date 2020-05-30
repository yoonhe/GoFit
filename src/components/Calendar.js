import React, { useState, useEffect, useCallback } from 'react';
import { CalendarWrap } from '../style/MainCalendar';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { requestHealthLog } from '../reducers/calendar';
import { VIDEO_LIST_REQUEST } from '../reducers/video';

const MainCalendar = () => {
  const dispatch = useDispatch();
  const { healthLog } = useSelector((store) => store.calendar);
  const [currentMonth, setCurrentMonth] = useState(moment());
  const weekdays = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = moment.months(); // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = currentMonth.format('MMMM'); // MMMM => May, MM => 05, M=>5
  let monthNum = Number(months.indexOf(month));

  const year = currentMonth.format('Y');
  const daysInMonth = currentMonth.daysInMonth(); // 이번달 날짜수(5월 => 31)
  const firstDayMonth = moment(currentMonth).startOf('month').format('d'); // Day of week(이번달 첫날짜의 요일) => 0 ~ 6(일 ~ 토)

  /* day 가져오는 코드 */
  // const currentDate = currentMonth.get('date');
  // const currentDay = currentMonth.format('D'); // D : 날짜, d : 요일

  const todayDate = currentMonth.format('YYYY-MM');
  useEffect(() => {
    console.log('1. requestHealthLog 호출');
    dispatch(requestHealthLog(todayDate));
  }, [currentMonth]); // componentDidMount와 같은 역할

  const blankMaker = useCallback(() => {
    let blank = [];
    for (let i = 0; i < firstDayMonth; i++) {
      // 이번달이 시작되는 첫 날짜의 요일 전까지 공백처리
      blank.push(
        <span className="prev-month-day" key={`blank${i}`}>
          {''}
        </span>
      );
    }
    return blank;
  }, [currentMonth]);

  const calendarDayClickHandler = useCallback((e) => {
    const clickDay = e.target.innerText;
    let clickDayFormat =
      e.target.innerText.length === 1 ? `0${clickDay}` : clickDay;
    console.log('clickDayFormat ? ', clickDayFormat);
    dispatch({
      type: VIDEO_LIST_REQUEST,
      data: `${todayDate}-${clickDayFormat}`,
    });
  });
  const dayInMonthMaker = useCallback(() => {
    console.log('달력 헬스로그 ? ', healthLog);
    let dayInMonth = [];
    for (let d = 1; d <= daysInMonth; d++) {
      // 해당하는 달에만 체크가 되야함.(해결전)
      let isHealth;
      if (healthLog) {
        isHealth = healthLog.includes(d) ? 'selected' : '';
      } else {
        isHealth = '';
      }
      dayInMonth.push(
        <span
          onClick={calendarDayClickHandler}
          key={`healthDay${d}`}
          className={isHealth}
        >
          {d}
        </span>
      );
    }
    return dayInMonth;
  }, [healthLog]);

  const setMonth = useCallback(
    (buttonType) => {
      monthNum = buttonType === 'prev' ? monthNum - 1 : monthNum + 1;
      let copyMonth = Object.assign({}, currentMonth);
      let selectedMonth = moment(copyMonth).set('month', monthNum);
      dispatch(requestHealthLog(todayDate));
      setCurrentMonth(selectedMonth);
    },
    [currentMonth]
  );

  return (
    <CalendarWrap>
      <div className="calendar-head">
        <button className="prev" onClick={setMonth.bind(this, 'prev')}>
          prev
        </button>
        <span>
          {year}년 {monthNum + 1}월
        </span>
        <button className="next" onClick={setMonth.bind(this, 'next')}>
          next
        </button>
      </div>
      <div className="calendar-body">
        <div className="title">
          {weekdays.map((item) => (
            <span key={`weekday_${item}`}>{item}</span>
          ))}
        </div>
        <div className="day">
          {blankMaker().map((item) => item)}
          {dayInMonthMaker().map((day) => day)}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default MainCalendar;
