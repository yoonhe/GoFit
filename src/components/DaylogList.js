import React, { useMemo, Component } from 'react';
import DaylogEntry from './DaylogEntry';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import moment from 'moment';
import { DaylogWrap } from '../style/DaylogEntry';

const DaylogList = ({ daylogs }) => {
  const dispatch = useDispatch();
  const { selectedDate, isSelectedDate, date } = useSelector(
    (state) => state.dayLog
  );
  const { username } = useSelector((state) => state.user.user);

  const dayGroup = (daylogs) => {
    console.log('daylog group function called');
    let newlogs = {};
    daylogs.map((daylog) => {
      const daylogdate = moment(daylog.createdAt).format('YYYY-MM-DD');
      //console.log('daylogdate???', daylogdate);
      if (newlogs[daylogdate] === undefined) {
        newlogs[daylogdate] = [];
        newlogs[daylogdate].push(daylog);
      } else {
        newlogs[daylogdate].push(daylog);
      }
    });
    //console.log('newlogs', newlogs);
    return newlogs;
  };
  let daylogsGroupByDate = dayGroup(daylogs);
  //console.log('props.daylogs ??', daylogs);
  //날짜 나중 순 sorting -> object 로 만들때 자동으로 날짜 오름차순으로 만들어짐 출력은 반대이므로 reverse
  const sortedDate = Object.keys(daylogsGroupByDate).reverse();

  const handleBacktoDaylog = () => {
    dispatch(daylogAction.unfilteredDaylog());
  };
  const currdate = moment().format('YYYY-MM');

  if (!isSelectedDate) {
    return (
      <DaylogWrap>
        <h2>
          {username} 님의 {date || currdate} 월 운동기록 입니다.
        </h2>
        {daylogs.length !== 0 ? (
          sortedDate.map((date) => {
            console.log('nothing selected');
            return (
              <div>
                <h3>{date}</h3>
                {daylogsGroupByDate[date].reverse().map((daylog) => (
                  <DaylogEntry daylog={daylog} />
                ))}
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </DaylogWrap>
    );
  } else {
    if (sortedDate.indexOf(selectedDate) !== -1) {
      return (
        <DaylogWrap>
          <h2> Daylog List </h2>
          <h3>{selectedDate}</h3>
          {daylogsGroupByDate[selectedDate].reverse().map((daylog) => (
            <DaylogEntry daylog={daylog} />
          ))}
          <span onClick={handleBacktoDaylog}> Back to All Daylogs </span>
        </DaylogWrap>
      );
    } else {
      return (
        <DaylogWrap>
          <div> NO DAYLOG ON {selectedDate}</div>
          <span onClick={handleBacktoDaylog}> Back to All Daylogs </span>
        </DaylogWrap>
      );
    }
  }
};

export default DaylogList;
