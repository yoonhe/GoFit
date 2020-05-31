import styled from 'styled-components';

export const SearchStyle = styled.div`
	box-sizing: border-box;
	margin-bottom: 16px;
	& input {
		width: 260px;
		height: 36px;
		background: #fafafa;
		border: 1px solid #dcdcdc;
		border-radius: 4px 0 0 4px;
		padding: 8px;
	}
	& button {
		width: 60px;
		height: 36px;
		background: white;
		color: gray;
		border: 1px solid #dcdcdc;
		border-radius: 0 4px 4px 0;
		text-align: center;
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(4, 160px);
	grid-gap: 4px;
	align-content: space-around;
`;

export const GridItem = styled.div`
	color: gray;
	& img {
		width: 196px;
		height: 110px;
		margin-bottom: 4px;
	}
	& input {
		margin-bottom: 4px;
		cursor: pointer;
	}
`;

export const TitleStyle = styled.div`
	color: chrome;
	& h4 {
		display: inline-block;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		font-size: 22px;
	}
`;
