import React from 'react';
import { useSelector } from 'react-redux';

const RankingPopup = props => {
	const rankingList = useSelector(store => store.ranking);
	console.log('rankingList : ??', rankingList);
	const handleClose = () => {
		console.log('OK Clicked!');
		props.showRankingClosePopup();
	};
	return (
		<div>
			<h3>주간순위</h3>
			<div>리스트</div>
			{/* {rankingList.map(rank => {
				return (
					<div>
						<RankingItem rank={rank} />
					</div>
				);
			})} */}
			<button onClick={handleClose}> 닫기</button>
		</div>
	);
};
export default RankingPopup;
