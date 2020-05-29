import styled from 'styled-components';
export const LoginStyle = styled.div`
	width: 320px;
	height: 458px;
	border: 1px solid #dcdcdc;
	background: white;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	font-size: 13px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	& input {
		width: 240px;
		height: 36px;
		background: #fafafa;
		border-radius: 4px;
		border: 1px solid #dcdcdc;
		padding: 8px;
		margin-bottom: 8px;
	}
	& h1 {
		display: inline-block;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		text-align: center;
		font-size: 32px;
	}
	& h1 span {
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
	&. text {
		text-align: left;
	}
`;

export const GoSignup = styled.div`
	width: 240px;
	height: 36px;
	background: white;
	color: tomato;
	border: 0px;
	padding: 8px;
	margin-top: 8px;
	margin-bottom: 16px;
	text-align: center;
`;
