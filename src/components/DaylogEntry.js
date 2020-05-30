import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as daylogAction from '../reducers/dayLog';
import waterImg from '../../water_icon3.jpg';

const DaylogEntry = ({ daylog }) => {
	//console.log('daylog entry called');
	//console.log('daylog entry props?', daylog);
	const dispatch = useDispatch();
	const youtubeTimeConvert = (second) => {
		let hour = parseInt(second / 3600);
		let min = parseInt((second - hour * 3600) / 60);
		let sec = parseInt(second - (hour * 3600 + min * 60));

		if (hour.toString().length === 1) hour = '0' + hour;
		if (min.toString().length === 1) min = '0' + min;
		if (sec.toString().length === 1) sec = '0' + sec;
		console.log('youtube time', second, 'hour', hour, 'min', min, 'sec', sec);
		return hour + ':' + min + ':' + sec;
	};
	const log = {
		videoTitle: daylog.Videos[0].youtubeTitle,
		message: daylog.message,
		weight: daylog.Healthlog.weight,
		videoTime: youtubeTimeConvert(daylog.Videos[0].youtubeTime),
		water: Array.from(Array(daylog.Healthlog.water).keys()),
		tag: daylog.Tags,
	};
	//console.log('videoTitle', videoTitle, 'weight', weight);
	//console.log('log.water',log.water,"daylog['Healthlog.water']",daylog['Healthlog.water']);
	//console.log('get tag data', log.tag);
	const filterTag = (e) => {
		const name = e.target.className;
		//console.log('e.target', e.target);
		//console.log('tag clicked!', name);
		dispatch(daylogAction.filterDaylogTag(name));
	};

	return (
		<div>
			<h4> Daylog Entry </h4>
			<div> YoutubeTitle: {log.videoTitle}</div>
			<div> Message: {log.message}</div>
			<div> Weight: {log.weight + ' kg'}</div>
			<div> 운동 시간: {log.videoTime}</div>
			{log.water ? (
				log.water.map((el) => {
					return <img src={waterImg} width="24px" height="24px" />;
				})
			) : (
				<div></div>
			)}
			{log.tag ? (
				log.tag.map((tag) => {
					//console.log('tag 가져오기 map', tag);
					return (
						<div className={tag.id} onClick={filterTag}>
							{tag.name}
						</div>
					);
				})
			) : (
				<div></div>
			)}
		</div>
	);
};

export default DaylogEntry;
