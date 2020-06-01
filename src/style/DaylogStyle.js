import styled, { css } from 'styled-components';
import { Popup } from './MainVideoStyle';
import rankingIcon from '../../water_icon1.png';

const tagcolorArr = [
  '#FFA98F',
  '#FFB399',
  '#FFBDA3',
  '#FFC7AD',
  '#FFD1B7',
  '#FF9E7D',
  '#FFA887',
  '#FFB291',
  '#FFBC9B',
  '#FFC6A5',
  '#FF5675',
  '#FF88A7',
  '#FFAAFF',
  '#FF46C5',
  '#3DFF92',
  '#98EBDC',
  '#AAEBAA',
  '#80E12A',
  '#4AB34A',
  '#32BEBE',
  '#41CDCD',
  '#3CFBFF',
  '#00E1FF',
  '#93DAFF',
  '#BECDFF',
  '#00BFFF',
  '#00B9FF',
  '#BECDFF',
  '#90AFFF',
  '#6495ED',
  '#82B3ED',
  '#FFC5D0',
  '#60BD89',
  '#FFD232',
  '#DB84A7',
  '#EB5A5A',
  '#F57878',
  '#FFB914',
  '#70D2B4',
  '#96C7ED',
  '#9DE4FF',
];

export const Popup2 = styled(Popup)`
  & > .inner > div {
    padding: 40px 20px;
  }
`;

export const DaylogInputStyle = styled.div`
  & h3 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 20px;
  }
  & > * + * {
    margin-top: 10px;
  }

  & input,
  & textarea {
    padding: 10px;
    width: 100%;
    border: 1px solid #dcdcdc;
  }

  & .water-logs {
  }
  & .water-logs li > * {
    vertical-align: middle;
  }
  & .water-logs .add-water-btn {
    position: relative;
    display: inline-block;
    margin-right: 10px;
    border: 2px dotted #0698fb;
    width: 40px;
    height: 40px;
    text-indent: -99999999999rem;
    border-radius: 50%;
    background: none;
    vertical-align: middle;
  }
  & .water-logs .add-water-btn:after,
  & .water-logs .add-water-btn:before {
    content: '';
    color: #0698fb;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #0698fb;
    display: block;
  }

  & .water-logs .add-water-btn:after {
    width: 10px;
    height: 2px;
  }
  & .water-logs .add-water-btn:before {
    width: 2px;
    height: 10px;
  }

  & .health-log-text > * {
    min-height: 150px;
  }

  & .Daylogtag {
    margin-top: 20px;
  }
  & .Daylogtag li {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 15px;
  }
  & .Daylogtag li + li {
    margin-left: 10px;
  }
  & .Daylogtag li:before {
    content: '#';
  }
  & .daylog-btn {
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
  & .daylog-btn button {
    background: #dcdcdc;
    border: none;
    color: #fff;
    padding: 10px 30px;
    border-radius: 30px;
    width: 100%;
    transition: 0.3s linear;
  }
  & .daylog-btn button:hover {
    background: tomato;
  }
`;

//tagcolorArr[Math.floor(Math.random() * tagcolorArr.elngth)];

export const TagStyle = styled.li`
  ${(props) => {
    let index = props.index;
    let color = tagcolorArr[Math.floor(Math.random() * tagcolorArr.length)];
    console.log('index? ', index);
    console.log('color?', color);
    return css`
      &:nth-child(${index + 1}) {
        color: ${color};
        border: 1px solid ${color};
      }
    `;
  }}
`;
