import styled from 'styled-components';
//신규 추가

export const RankPopupStyle = styled.div`
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

	& > .inner {
		position: relative;
		width: 320px;
		height: 440px;
		background: #fff;
		overflow: hidden;
		border-radius: 8px;
	}

	& > .inner > div {
		padding: 24px;
		height: 100%;
	}

	& > .inner > div > h3 {
		display: inline-block;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		font-size: 22px;
		color: tomato;
		margin-bottom: 16px;
	}

	& > .inner > div > h3 > img {
		width: 22px;
		height: 22px;
		margin-right: 8px;
	}

	& .inner > div > button {
		position: absolute;
		bottom: 20px;
		display: block;
		width: 272px;
		height: 38px;
		background: tomato;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 13px;
	}
`;
