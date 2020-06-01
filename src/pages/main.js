import React, { useEffect, useState, useCallback } from 'react';
import '../style/index.css';
import MainVideo from '../components/MainVideo';
import SearchPopup from '../components/SearchPopup';
import MainCalendar from '../components/Calendar';

import DaylogInput from '../components/DaylogInput';
import DaylogList from '../components/DaylogList';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import * as loginAction from '../reducers/user';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { HeaderWrap, MainWrap, MainTopWrap, RankingBtn } from '../style/Main';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_RANKING } from '../reducers/ranking';
import RankingPopup from '../components/RankingPopup';
import { RankPopupStyle } from '../style/RankingStyle';

axios.defaults.withCredentials = true;

const Main = (props) => {
  const daylogs = useSelector((state) => state.dayLog.daylogs);
  const { isLogin, user } = useSelector((state) => state.user);
  const { filtered, isFiltered } = useSelector((state) => state.dayLog);
  const [showRankingPopup, setshowRankingPopup] = useState(false); //랭킹팝업 추가
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(daylogAction.fetchDaylog());
  }, []);

  if (user === null) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    console.log('logout clicked');
    dispatch(loginAction.postlogout());
  };
  const handleBacktoDaylog = () => {
    dispatch(daylogAction.unfilteredDaylog());
  };

  const showRankingPopupOpen = useCallback(() => {
    dispatch({ type: LOAD_RANKING }); //이 부분 오류 수정했습니다.
    setshowRankingPopup(true);
  }, []);

  const showRankingClosePopup = useCallback(() => {
    setshowRankingPopup(false);
  }, []);

  return (
    <>
      <HeaderWrap>
        <div className="inner">
          <h1>GOFIT</h1>
          <div className="right-item">
            <button className="logout-btn" onClick={handleLogout}>
              {' '}
              LOGOUT{' '}
            </button>
            <RankingBtn onClick={showRankingPopupOpen} />
          </div>
        </div>
      </HeaderWrap>
      <MainWrap>
        <MainTopWrap>
          <MainVideo />
          <MainCalendar />
        </MainTopWrap>
        {!isFiltered ? (
          <div>
            <DaylogList daylogs={daylogs} />
          </div>
        ) : (
          <div>
            <h3> {"'" + filtered[0].Tags[0].name + "' Tag filtering ..."} </h3>
            <span onClick={handleBacktoDaylog}> Back to Daylog </span>
            <DaylogList daylogs={filtered} />
          </div>
        )}
      </MainWrap>
      {showRankingPopup && (
        <RankPopupStyle>
          <div className="inner">
            <RankingPopup showRankingClosePopup={showRankingClosePopup} />
          </div>
        </RankPopupStyle>
      )}
    </>
  );
};

export default Main;
