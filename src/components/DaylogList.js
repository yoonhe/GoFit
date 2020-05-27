import React, { useMemo, Component } from 'react';
import DaylogEntry from './DaylogEntry';
import axios from 'axios';
//axios.defaults.withCredentials = true;

const DaylogList = ({ daylogs }) => {
	console.log('daylog list called');

	const dayGroup = (daylogs) => {
		console.log('daylog goup function called');
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
	const daylogsGroupByDate = dayGroup(daylogs);
	//console.log('props.daylogs ??', daylogs);
	//날짜 나중 순 sorting -> object 로 만들때 자동으로 날짜 오름차순으로 만들어짐 출력은 반대이므로 reverse
	const sortedDate = Object.keys(daylogsGroupByDate).reverse();

	return (
		<div>
			<h3> Daylog List </h3>
			{daylogs.length !== 0 ? (
				sortedDate.map((date) => {
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
};

export default DaylogList;
