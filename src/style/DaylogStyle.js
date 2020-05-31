import styled from 'styled-components';

const tagcolorArr = [
	'#FFA98F',
	'#FFB399',
	'#FFBDA3',
	'#FFC7AD',
	'#FFD1B7',
	'#FF9E7D',
	'#FFA887',
	'#FFB291',
	'#FFBC9B',
	'#FFC6A5',
	'#FF5675',
	'#FF88A7',
	'#FFAAFF',
	'#FF46C5',
	'#3DFF92',
	'#98EBDC',
	'#AAEBAA',
	'#80E12A',
	'#4AB34A',
	'#32BEBE',
	'#41CDCD',
	'#3CFBFF',
	'#00E1FF',
	'#93DAFF',
	'#BECDFF',
	'#00BFFF',
	'#00B9FF',
	'#BECDFF',
	'#90AFFF',
	'#6495ED',
	'#82B3ED',
	'#FFC5D0',
	'#60BD89',
	'#FFD232',
	'#DB84A7',
	'#EB5A5A',
	'#F57878',
	'#FFB914',
	'#70D2B4',
	'#96C7ED',
	'#9DE4FF',
];
export const DaylogInputStyle = styled.div`
	border: 1px solid #dcdcdc;
	background: white;
	font-size: 13px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	padding-left: 30px;
	color: #5e5e5f;
	font-weight: 700;
	font-size: 18px;
	text-align: left;
	clear: both;
	& input {
		width: 240px;
		height: 36px;
		background: #fafafa;
		border-radius: 4px;
		border: 1px solid #dcdcdc;
		padding: 8px;
		margin-left: 5px;
		margin-bottom: 8px;
		color: #5e5e5f;
		font-weight: 500;
	}
	& textarea {
		font-weight: 500;
		width: 80%;
		height: 100px;
		background: #fafafa;
		border-radius: 4px;
		border: 1px solid #dcdcdc;
		padding: 8px;
		margin-bottom: 8px;
		color: #5e5e5f;
	}
	& h3 {
		display: inline-block;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		text-align: center;
		font-size: 32px;
	}
	& h3 span {
		background: linear-gradient(to right, #ff416c, #ff4b2b);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	& button {
		width: 240px;
		height: 36px;
		background: tomato;
		color: white;
		border-radius: 4px;
		border: 0px;
		padding: 8px;
		margin-top: 8px;
	}
	& .tag {
		width: auto;
		height: 36px;
		border: 1px solid
			${(props) => tagcolorArr[Math.floor(Math.random() * tagcolorArr.length)]};
		color: tomato;
		margin-left: 10px;
		text-align: center;
		padding: 2px;
		float: left;
	}
	& .btn {
		clear: both;
	}
`;

//tagcolorArr[Math.floor(Math.random() * tagcolorArr.elngth)];

export const TagStyle = styled.div`
	width: auto;
	height: 36px;
	border: 1px solid
		${tagcolorArr[Math.floor(Math.random() * tagcolorArr.length)]};
	color: tomato;
	margin-left: 10px;
	text-align: center;
	padding: 2px;
	float: left;
`;
