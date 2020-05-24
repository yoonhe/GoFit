import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from '../reducers/user';
import { Link } from 'react-router-dom';
import { LoginStyle } from '../style/LoginStyle';

const Login = (props) => {
	let [values, setValues] = useState({});
	const dispatch = useDispatch();
	const handleInputTextChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleLogin = () => {
		console.log('values will send', values);
		dispatch(loginAction.postLogin(values));
	};
	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			handleLogin();
		}
	};

	return (
		<div>
			<LoginStyle>
				<h1>
					<span>Go-Fit!</span>
				</h1>
				<h3> Login </h3>
				<div className="text">
					Email
					<div>
						<input
							name="email"
							onChange={handleInputTextChange}
							onKeyPress={handleEnter}
						/>
					</div>
				</div>
				<div className="text">
					Password
					<div>
						<input
							type="password"
							name="password"
							onChange={handleInputTextChange}
							onKeyPress={handleEnter}
						/>
					</div>
				</div>
				<button onClick={handleLogin}>Login</button>
				<Link to="/Signup">
					<button>Sign up</button>
				</Link>
			</LoginStyle>
		</div>
	);
};

export default Login;
