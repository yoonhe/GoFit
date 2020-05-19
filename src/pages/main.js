import React, { useEffect } from 'react';
import MainVideo from '../components/MainVideo';

import MainCalendar from '../components/Calendar';

import DaylogInput from '../components/DaylogInput';
import DaylogList from '../components/DaylogList';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as daylogAction from '../reducers/dayLog';

const Main = (props) => {
	const { DaylogAction } = props;
	const daylogs = useSelector((state) => state.dayLog.daylogs);

	useEffect(() => {
		DaylogAction.fetchDaylog();
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				margin: '0 auto',
				width: '100%',
				maxWidth: '1200px',
			}}
		>
			<MainVideo />
			<MainCalendar />
			<DaylogInput />
			<DaylogList daylogs={daylogs} />
			<div> LOGOUT </div>
		</div>
	);
};

export default connect(
	(state) => ({}),
	(dispatch) => ({
		DaylogAction: bindActionCreators(daylogAction, dispatch),
	})
)(Main);
