import styled from 'styled-components';

export const GridContainer = styled.div`
	font-size: 12px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 160px);
	grid-gap: 4px;
	align-content: space-around;
`;

export const GridItem = styled.div`
	font-size: 12px;
	color: gray;
	& img {
		width: 196px;
		height: 110px;
		margin-bottom: 2px;
	}
	& input {
		margin-bottom: 2px;
		cursor: pointer;
	}
`;

export const SearchPopupStyle = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	z-index: 9999;
	font-size: 13px;
	& > .inner {
		position: relative;
		width: 800px;
		height: 600px;
		background: #fff;
		overflow: hidden;
		border-radius: 8px;
	}
	& > .inner > div {
		margin-top: 100px;
		margin-bottom: 50px;
		padding: 0 30px 0 30px;
		height: 420px;
		overflow-y: scroll;
	}
	& .inner > button {
		position: absolute;
		bottom: 24px;
		right: 300px;
		display: block;
		width: 200px;
		height: 38px;
		background: white;
		color: gray;
		border: 1px solid #dcdcdc;
		border-radius: 4px;
	}
	& .inner > button:hover {
		background: tomato;
		color: white;
		border: none;
	}

	& > .inner > div > .search-input {
		position: absolute;
		top: 24px;

		box-sizing: border-box;
		background: #fff;
		& input {
			position: relative;
			width: 260px;
			height: 36px;
			background: #fafafa;
			border: 1px solid #dcdcdc;
			border-radius: 4px 0 0 4px;
			padding: 8px;
		}
		& button {
			position: relative;
			width: 60px;
			height: 36px;
			background: white;
			color: gray;
			border: 1px solid #dcdcdc;
			border-radius: 0 4px 4px 0;
			text-align: center;
			padding: 8px;
		}
		& h3 {
			font-size: 18px;
			color: tomato;
			width: 752;
			background: #fff;
		}
	}

	& > .inner > div > .result {
	}
`;
