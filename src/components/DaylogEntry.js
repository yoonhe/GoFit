import React from 'react';

const DaylogEntry = ({ log }) => {
	console.log('daylog entry called');
	console.log('daylog entry props?', log);
	return (
		<div>
			<h4> Daylog Entry </h4>
			<div> {log.youtubeTitle}</div>
			<div> {log.message}</div>
			<div> weight: {log.weight}</div>
		</div>
	);
};

export default DaylogEntry;
