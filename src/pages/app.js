import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from './main';
import Login from '../components/Login';
import Signup from '../components/Signup';
import SignupFormik from '../components/SignupFormik';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import {} from 'react-router';
import { LOAD_USER_REQUEST } from '../reducers/user';

const App = () => {
	const { isLogin, user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!user) {
			dispatch({
				type: LOAD_USER_REQUEST,
			});
		}
	}, [user && user.id]);

	return (
		<div>
			<Route exact path="/" component={isLogin ? Main : Login} />
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/main" component={Main} />
				<Route path="/SignupFormik" component={SignupFormik} />
			</Switch>
		</div>
	);
};

export default App;
