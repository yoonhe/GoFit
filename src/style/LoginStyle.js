import styled from 'styled-components';
export const LoginStyle = styled.div`
	width: 330px;
	height: 400px;
	border: 1px solid #dcdcdc;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& input {
		margin: 0 auto;
		width: 130px;
	}
	& h1 {
		display: inline-block;
		font-family: 'Roboto', sans-serif;
		background: #fff;
		font-weight: 700;
		text-align: center;
		font-size: 46px;
	}
	& h1 span {
		background: linear-gradient(to right, #ff416c, #ff4b2b);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	& button {
		margin: 10px 5px;
		background: white;
		border: 1px solid #f2fcfe;
		color: #1c92d2;
		float: right;
	}
	&. text {
		text-align: left;
	}
`;
