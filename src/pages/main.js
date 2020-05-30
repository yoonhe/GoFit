import React, { useEffect } from 'react';
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
import { MainWrap, MainTopWrap } from '../style/Main';
import { LOAD_USER_REQUEST } from '../reducers/user';

axios.defaults.withCredentials = true;

const Main = (props) => {
	const daylogs = useSelector((state) => state.dayLog.daylogs);
	const { isLogin, user } = useSelector((state) => state.user);
	const { filtered, isFiltered } = useSelector((state) => state.dayLog);
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

	//console.log('tag filtered', filtered);
	return (
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
			<div onClick={handleLogout}> LOGOUT </div>
		</MainWrap>
	);
};

export default Main;
