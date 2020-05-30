import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import {
	LOG_IN,
	LOG_OUT,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOAD_USER_REQUEST,
	LOAD_USER_SUCCESS,
	LOAD_USER_FAIL,
	LOG_OUT_SUCCESS,
} from '../reducers/user';
import axios from 'axios';

const ROOT_URL = 'http://localhost:7777/';
function loginAPI(data) {
	// 서버에 login 요청을 하는 부분
	console.log('login API called');
	console.log('user info will get', data);

	const loginURL = ROOT_URL + 'api/user/login';
	return axios.post(loginURL, data, { withCredentials: true });
}

function* login(data) {
	console.log('login called?');
	try {
		const userInfo = yield call(loginAPI, data.loginInfo);
		// call => 함수 동기적 호출
		// 서버에 로그인 요청 성공시 다음줄이 실행됨
		console.log('LOGIN userINFO???', userInfo);
		if (userInfo.status === 200) {
			yield put({
				// put은 dispatch랑 동일
				type: LOGIN_SUCCESS,
				userInfo: userInfo.data,
			});
		} else {
			yield put({
				type: LOGIN_FAIL,
			});
		}
	} catch (e) {
		// loginAPI 실패시 다음 put 실행
		console.error(LOGIN_FAIL, e.msessage);
	}
}

function* watchLogin() {
	yield takeEvery(LOG_IN, login);
}

function loadUserAPI() {
	return axios.get(`/user`, { withCredentials: true });
}

function* loadUser(action) {
	try {
		const result = yield call(loadUserAPI);
		console.log(result.data);
		yield put({
			// put은 dispatch랑 동일
			type: LOAD_USER_SUCCESS,
			data: result.data,
		});
	} catch (e) {
		yield put({
			type: LOAD_USER_FAIL,
		});
		console.error(e);
	}
}

function* watchLoadUser() {
	yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

function logoutAPI() {
	console.log('logoutAPI');
	return axios.post('/user/logout').then((res) => {
		console.log('logout res??', res);
	});
}

function* logoutReguest() {
	try {
		const res = yield call(logoutAPI);
		console.log('logout request', res);
		yield put({
			type: LOG_OUT_SUCCESS,
		});
	} catch (e) {
		console.log('LOGOUT Error', e);
	}
}

function* watchLogOut() {
	yield takeEvery(LOG_OUT, logoutReguest);
}

export default function* userSaga() {
	yield all([fork(watchLogin), fork(watchLoadUser), fork(watchLogOut)]); // fork => 함수 비동기적 호출
}
