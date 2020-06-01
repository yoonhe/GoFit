import React from 'react';

const RankingItem = ({ username, score, order }) => {
	const styleLine = {
		marginBottom: '10px',
		marginTop: '10px'
	};

	const styleOder = {
		fontSize: '14px',
		fontWeight: '700',
		color: 'tomato',
		margin: '8px'
	};
	const styleName = {
		fontSize: '14px',
		fontWeight: '700',
		margin: '4px'
	};

	const styleScore = {
		position: 'absolute',
		left: '140px',
		fontSize: '12px',
		color: 'grey',
		margin: '4px'
	};
	//랭킹커밋
	return (
		<div>
			<span style={styleOder}>{order}</span>
			<span style={styleName}>{username}</span>
			<span style={styleScore}>{score}</span>
			<hr style={styleLine} />
		</div>
	);
};

export default RankingItem;
