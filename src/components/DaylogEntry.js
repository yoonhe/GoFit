import React from 'react';
import waterImg from '../../water_icon3.jpg';

const DaylogEntry = ({ daylog }) => {
	//console.log('daylog entry called');
	//console.log('daylog entry props?', daylog);
	const log = {
		videoTitle: daylog['Videos.youtubeTitle'],
		message: daylog.message,
		weight: daylog['Healthlog.weight'],
		videoTime: daylog['Videos.youtubeTime'],
		water: Array.from(Array(daylog['Healthlog.water']).keys()),
	};
	//console.log('videoTitle', videoTitle, 'weight', weight);
	console.log(
		'log.water',
		log.water,
		"daylog['Healthlog.water']",
		daylog['Healthlog.water']
	);
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
		</div>
	);
};

export default DaylogEntry;
