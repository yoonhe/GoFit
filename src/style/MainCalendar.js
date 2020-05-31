import styled from 'styled-components';

export const CalendarWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 350px;
  color: #666;
  & > div {
    margin: 0 auto;
  }
  .calendar-head {
    position: relative;
    padding: 10px 0;
    text-align: center;
  }

  .calendar-head > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #dcdcdc;
    border: none;
    color: #fff;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    text-indent: -999999px;
    font-size: 0;
    transition: 0.2s linear;
  }
  .calendar-head > button:before {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    content: '';
  }
  .calendar-head > .prev:before {
    border-right: 8px solid #fff;
    margin-left: -1px;
  }
  .calendar-head > .next:before {
    border-left: 8px solid #fff;
    margin-right: -1px;
  }

  .calendar-head > button:hover {
    background: tomato;
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

    // &:first-child,
    // &:nth-child(7n + 1) {
    //   color: red;
    // }
    // &:nth-child(7n) {
    //   color: blue;
    // }
    &.prev-month-day {
      color: #dcdcdc;
    }
    &.selected,
    &.clicked {
      position: relative;
      color: #fff;
    }
    &.selected:before,
    &.clicked:before {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(100% - 15px);
      height: calc(100% - 15px);
      background: tomato;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      content: '';
      z-index: -1;
    }
    &.clicked {
      color: #fff;
    }
    &.clicked:before {
      // background: #dcdcdc;
      opacity: 0.5;
    }
  }
`;
