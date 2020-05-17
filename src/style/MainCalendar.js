import styled from 'styled-components';

export const CalendarWrap = styled.div`
  width: 60%;
  & > * {
    padding: 15px;
  }
  & > div {
    margin: 0 auto;
    width: 350px;
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
    flex-wrap: wrap;
    justify-content: end;
  }
  .calendar-body > div > span {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;

    &:first-child,
    &:nth-child(7n + 1) {
      color: red;
    }
    &:nth-child(7n) {
      color: blue;
    }
    &.prev-month-day {
      color: #dcdcdc;
    }
    &.selected {
      position: relative;
      color: #fff;
    }
    &.selected:before {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% - 15px);
      height: calc(100% - 15px);
      background: skyblue;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      content: '';
      z-index: -1;
    }
  }
`;
