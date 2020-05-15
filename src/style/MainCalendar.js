import styled from 'styled-components';

export const CalendarWrap = styled.div`
  width: 60%;
  & > * {
    padding: 15px;
  }
  .calendar-head {
    position: relative;
    text-align: center;
  }

  .calendar-head > button {
    position: absolute;
  }

  .calendar-head > .prev {
    left: 15px;
  }
  .calendar-head > .next {
    right: 15px;
  }

  .calendar-body {
  }
  .calendar-body > div {
    display: flex;
    justify-content: space-between;
  }
  .calendar-body > div > span {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;

    &:first-child {
      color: red;
    }
    &:last-child {
      color: blue;
    }
    &.prev-month-day {
      color: #dcdcdc;
    }
    &.selected {
      border-radius: 50%;
      color: #fff;
      background: skyblue;
    }
  }
`;
