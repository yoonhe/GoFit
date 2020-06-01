import styled from 'styled-components';
import './index.css';

export const HeaderWrap = styled.header`
  // &,
  // & > * {
  //   font-family: 'Noto Sans KR', sans-serif;
  //   font-weight: 400;
  // }
  position: relative;
  padding: 15px;
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  color: tomato;
  & h1 {
    letter-spacing: 15px;
  }

  & .logout-btn {
    position: absolute;
    right: 115px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 10px 15px;
    border: none;
    background: #dcdcdc;
    color: #fff;
    border-radius: 15px;
    transition: 0.3s linear;
  }

  & .logout-btn:hover {
    background: tomato;
  }
`;

export const MainWrap = styled.div`
  // &,
  // & > * {
  //   font-family: 'Noto Sans KR', sans-serif;
  //   font-weight: 400;
  // }
  position: relative;
  margin: 0 auto 100px;
  width: calc(100% - 200px);

  & > * {
    width: 100%;
  }
`;

export const MainTopWrap = styled.div`
  position: relative;
  margin: 50px 0;
  padding: 0 0 10px;
`;
