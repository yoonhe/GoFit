import styled from 'styled-components';

export const DaylogWrap = styled.div`
  text-align: center;
  margin: 0 100px;
  & h2 {
    font-size: 26px;
  }
  & h3 {
    margin-bottom: 15px;
    font-size: 22px;
    text-align: left;
  }
  & .daylog-item {
    padding: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 15px;
    color: #666;
    text-align: left;
    transition: linear 0.3s;
  }
  & .daylog-item:hover {
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
  }
  & .daylog-item + .daylog-item {
    margin-top: 15px;
  }

  & .daylog-item .title {
    margin: -3px 0 10px;
    color: tomato;
  }
  & .daylog-item .title .water-and-health {
    color: #666;
    float: right;
  }
  & .daylog-item .title .water-and-health > * {
    display: inline-block;
    vertical-align: middle;
  }
  & .daylog-item .title .water-and-health > * + * {
    margin-left: 5px;
  }
  & .daylog-item .title .water-and-health > * + *:before {
    display: inline-block;
    margin: 0 5px;
    width: 1px;
    height: 10px;
    background: #dcdcdc;
    vertical-align: middle;
    content: '';
  }

  & .daylog-item .title .water-and-health .water-log {
    margin-top: -3px;
    padding-left: 0;
  }
  & .daylog-item .title .water-and-health .water-log li {
    display: inline-block;
  }

  & .daylog-item .health-feel {
    color: #333;
    font-size: 16px;
  }

  & .daylog-item .tag-list {
    text-align: right;
  }
  & .daylog-item .tag-list li {
    display: inline-block;
    border-radius: 15px;
    border: 1px solid #dcdcdc;
    color: #666;
    padding: 7px;
    cursor: pointer;
    transition: 0.3s linear;
  }
  & .daylog-item .tag-list li + li {
    margin-left: 7px;
  }
  & .daylog-item .tag-list li:hover {
    color: tomato;
    border-color: tomato;
  }
  & .daylog-item .tag-list li:before {
    display: inline-block;
    content: '#';
  }
`;
