import React, { useState, useEffect } from 'react';
import { CalendarWrap } from '../style/MainCalendar';

const MainCalendar = () => {
  return (
    <CalendarWrap>
      <div className="calendar-head">
        <button className="prev">이전달</button>
        <span>2020년 5월</span>
        <button className="next">다음달</button>
      </div>
      <div className="calendar-body">
        <div className="title">
          <span>일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
        </div>
        <div className="day">
          <span class="prev-month-day">31</span>
          <span>1</span>
          <span>2</span>
          <span class="selected">3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>
    </CalendarWrap>
  );
};

export default MainCalendar;
