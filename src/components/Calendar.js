import React, { useState } from 'react';
import { CalendarWrap } from '../style/MainCalendar';
import moment from 'moment';

const MainCalendar = () => {
  const weekdays = moment.weekdaysShort(); // ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const months = moment.months(); // ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const [currentMonth, setCurrentMonth] = useState(moment());
  const [healthDay, setHealthDay] = useState([15, 20]);

  const year = () => {
    return currentMonth.format('Y');
  };
  const month = () => {
    return currentMonth.format('MMMM'); // MMMM => May, MM => 05, M=>5
  };

  const daysInMonth = () => {
    return currentMonth.daysInMonth(); // 이번달 날짜수(5월 => 31)
  };

  // const currentDate = () => {
  //   return currentMonth.get('date');
  // };

  // const currentDay = () => {
  //   return currentMonth.format('D'); // D : 날짜, d : 요일
  // };

  const firstDayMonth = () => {
    let firstDay = moment(currentMonth).startOf('month').format('d'); // Day of week(이번달 첫날짜의 요일) => 0 ~ 6(일 ~ 토)
    return firstDay;
  };
  // console.log('today ? ', today.format('D')); // today Day

  let blank = [];
  for (let i = 0; i < firstDayMonth(); i++) {
    blank.push(<span className="prev-month-day">{''}</span>);
  }

  let dayInMonth = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    let isHealth = healthDay.includes(d) && 'selected';
    dayInMonth.push(
      <span key={d} className={isHealth}>
        {d}
      </span>
    );
  }

  let monthNum = Number(months.indexOf(month()));
  console.log('이번달 ? ', monthNum);

  const setMonth = (buttonType) => {
    monthNum = buttonType === 'prev' ? monthNum - 1 : monthNum + 1;
    let copyMonth = Object.assign({}, currentMonth);
    let selectedMonth = moment(copyMonth).set('month', monthNum);
    console.log('selectedMonth ? ', selectedMonth.month);
    setCurrentMonth(selectedMonth);
  };

  return (
    <CalendarWrap>
      <div className="calendar-head">
        <button className="prev" onClick={setMonth.bind(this, 'prev')}>
          prev
        </button>
        <span>
          {year()}년 {monthNum + 1}월
        </span>
        <button className="next" onClick={setMonth.bind(this, 'next')}>
          next
        </button>
      </div>
      <div className="calendar-body">
        <div className="title">
          {weekdays.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <div className="day">
          {blank.map((item) => item)}
          {dayInMonth.map((day) => day)}
        </div>
      </div>
    </CalendarWrap>
  );
};

export default MainCalendar;
