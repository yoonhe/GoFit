import styled from 'styled-components';
import './index.css';
import rankingIcon from '../../ranking.png';

export const RankingBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0px;
  background: tomato url(${rankingIcon}) no-repeat center center;
  background-size: contain;
  font-size: 10px;
  color: white;
  text-indent: -999999rem;
`;
export const HeaderWrap = styled.header`
  border-bottom: 1px solid #dcdcdc;
  text-align: center;
  color: tomato;
  font-size: 30px;
  position: sticky;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
  & .inner {
    position: relative;
    padding: 30px 0;
    margin: 0 100px;
  }

  & h1 {
    letter-spacing: 15px;
  }

  & .right-item {
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  & .right-item > * {
    vertical-align: middle;
  }
  & .right-item > * + * {
    margin-left: 10px;
  }
  & .logout-btn {
    padding: 10px 15px;
    border: none;
    background: #dcdcdc;
    color: #fff;
    border-radius: 15px;
    transition: 0.3s linear;
    font-size: 14px;
  }

  & .logout-btn:hover {
    background: tomato;
  }
`;

export const MainWrap = styled.div`
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
