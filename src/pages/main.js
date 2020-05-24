import React, { useEffect } from 'react';
import MainVideo from '../components/MainVideo';

import MainCalendar from '../components/Calendar';

import DaylogInput from '../components/DaylogInput';
import DaylogList from '../components/DaylogList';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import * as loginAction from '../reducers/user';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Main = (props) => {
	const daylogs = useSelector((state) => state.dayLog.daylogs);
	const isLogin = useSelector((state) => state.user.isLogin);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(daylogAction.fetchDaylog());
	}, []);
	if (!isLogin) {
		return <Redirect to="/login" />;
	}
	const handleLogout = () => {
		console.log('logout clicked');
		dispatch(loginAction.postlogout());
	};
	return (
		<div
			style={{
				margin: '0 auto',
				width: '100%',
				maxWidth: '1200px',
			}}
		>
			<MainVideo />
			<MainCalendar />
			<div>
				<DaylogInput />
			</div>
			<div>
				<DaylogList daylogs={daylogs} />
			</div>
			<div onClick={handleLogout}> LOGOUT </div>
		</div>
	);
};

export default Main;
