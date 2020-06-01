import React from 'react';
import { useSelector } from 'react-redux';
import RankingItem from './RankingItem';
import rankingIcon from '../../ranking.png';

const RankingPopup = props => {
	const rankingData = useSelector(store => store.ranking.ranking);
	const rankingArr = rankingData.slice(0, 7);
	// console.log('rankingArr 전달성공? :', rankingArr[0]);
	const timeConvert = second => {
		let hour = parseInt(second / 3600);
		let min = parseInt((second - hour * 3600) / 60);
		let sec = parseInt(second - (hour * 3600 + min * 60));

		if (hour.toString().length === 1) hour = '0' + hour;
		if (min.toString().length === 1) min = '0' + min;
		if (sec.toString().length === 1) sec = '0' + sec;
		//console.log('youtube time', second, 'hour', hour, 'min', min, 'sec', sec);
		return hour + ':' + min + ':' + sec;
	};

	const handleClose = () => {
		console.log('OK Clicked!');
		props.showRankingClosePopup();
	};

	let count = 1;
	//랭킹커밋
	return (
		<div>
			<h3>
				<img src={rankingIcon} />
				주간랭킹 TOP7!
			</h3>
			{rankingArr.map(rank => {
				const username = rank.username;
				const score = rank.score;
				return (
					<div key={rank.id}>
						<RankingItem
							order={count++}
							username={username}
							score={timeConvert(score)}
						/>
					</div>
				);
			})}
			<button onClick={handleClose}>닫기</button>
		</div>
	);
};
export default RankingPopup;
