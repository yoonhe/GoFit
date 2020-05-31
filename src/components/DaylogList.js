import React, { useMemo, Component } from 'react';
import DaylogEntry from './DaylogEntry';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import moment from 'moment';

const DaylogList = ({ daylogs }) => {
	const dispatch = useDispatch();
	const { selectedDate, isSelectedDate, date } = useSelector(
		(state) => state.dayLog
	);
	const { username } = useSelector((state) => state.user.user);

	const dayGroup = (daylogs) => {
		console.log('daylog group function called');
		let newlogs = {};
		daylogs.map((daylog) => {
			const daylogdate = daylog.createdAt.substring(
				0,
				daylog.createdAt.indexOf('T')
			);
			//console.log('daylogdate???', daylogdate);
			if (newlogs[daylogdate] === undefined) {
				newlogs[daylogdate] = [];
				newlogs[daylogdate].push(daylog);
			} else {
				newlogs[daylogdate].push(daylog);
			}
		});
		//console.log('newlogs', newlogs);
		return newlogs;
	};
	let daylogsGroupByDate = dayGroup(daylogs);
	//console.log('props.daylogs ??', daylogs);
	//날짜 나중 순 sorting -> object 로 만들때 자동으로 날짜 오름차순으로 만들어짐 출력은 반대이므로 reverse
	const sortedDate = Object.keys(daylogsGroupByDate).reverse();

	const handleBacktoDaylog = () => {
		dispatch(daylogAction.unfilteredDaylog());
	};
	const currdate = moment().format('YYYY-MM');

	if (!isSelectedDate) {
		return (
			<div>
				<h3>
					{username} 님의 {date || currdate} 월 운동기록 입니다.
				</h3>
				{daylogs.length !== 0 ? (
					sortedDate.map((date) => {
						console.log('nothing selected');
						return (
							<div>
								<h3>{date}</h3>
								{daylogsGroupByDate[date].reverse().map((daylog) => (
									<DaylogEntry daylog={daylog} />
								))}
							</div>
						);
					})
				) : (
					<div></div>
				)}
			</div>
		);
	} else {
		if (sortedDate.indexOf(selectedDate) !== -1) {
			return (
				<div>
					<h3> Daylog List </h3>
					<h3>{selectedDate}</h3>
					{daylogsGroupByDate[selectedDate].reverse().map((daylog) => (
						<DaylogEntry daylog={daylog} />
					))}
					<span onClick={handleBacktoDaylog}> Back to All Daylogs </span>
				</div>
			);
		} else {
			return (
				<div>
					<div> NO DAYLOG ON {selectedDate}</div>
					<span onClick={handleBacktoDaylog}> Back to All Daylogs </span>
				</div>
			);
		}
	}
};

export default DaylogList;
