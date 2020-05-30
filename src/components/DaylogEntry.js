import React from 'react';
import waterImg from '../../water_icon3.jpg';

const DaylogEntry = ({ daylog }) => {
	//console.log('daylog entry called');
	//console.log('daylog entry props?', daylog);
	const log = {
		videoTitle: daylog.Videos[0].youtubeTitle,
		message: daylog.message,
		weight: daylog.Healthlog.weight,
		videoTime: daylog.Videos[0].youtubeTime,
		water: Array.from(Array(daylog.Healthlog.water).keys()),
		tag: daylog.Tags,
	};
	//console.log('videoTitle', videoTitle, 'weight', weight);
	//console.log('log.water',log.water,"daylog['Healthlog.water']",daylog['Healthlog.water']);
	console.log('get tag data', log.tag);
	return (
		<div>
			<h4> Daylog Entry </h4>
			<div> YoutubeTitle: {log.videoTitle}</div>
			<div> Message: {log.message}</div>
			<div> Weight: {log.weight}</div>
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
					console.log('tag 가져오기 map', tag);
					return <div>{tag.name}</div>;
				})
			) : (
				<div></div>
			)}
		</div>
	);
};

export default DaylogEntry;
