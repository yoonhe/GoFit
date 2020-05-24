import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_DAYLOG,
	LOAD_DAYLOG,
	POST_DAYLOG,
	NEW_DAYLOG,
} from '../reducers/dayLog';
import axios from 'axios';
import moment from 'moment';
const ROOT_URL = 'http://localhost:7777/';
const TEST_URL = 'TEST';

const daylogSample = [
	{
		date: '2020-05-01',
		message: 'workout at home!',
		user_id: 1,
		youtubeTitle:
			'디저트가 자꾸자꾸 먹고 싶어, 다이어트가 힘들다면 이렇게 하세요 :) (5가지)',
		youtubeTime: '8:01',
		weight: 58,
	},
	{
		date: '2020-05-01',
		message: '허벅지 운동 화이팅',
		user_id: 1,
		youtubeTitle:
			'🔥허벅지 안쪽살🔥빨리 빼려면 1달만 이 루틴 하세요(안벅지 제거/허벅지살)',
		youtubeTime: '16:19',
		weight: 58,
	},
	{
		date: '2020-05-03',
		message: '다시 허벅지 운동!!',
		user_id: 1,
		youtubeTitle:
			'🔥허벅지 안쪽살🔥빨리 빼려면 1달만 이 루틴 하세요(안벅지 제거/허벅지살)',
		youtubeTime: '16:19',
		weight: 57,
	},
];

function getDaylogAPI() {
	console.log('get DAYLOG API CALLED!');
	/* 	const month = moment().format('YYYY-MM');
	const getURL = ROOT_URL + 'api/daylog/' + month;
	console.log('get URL Momth', getURL); */
	//return axios.get(ROOT_URL/daylog)
	return daylogSample;
}

function* fetchDaylog() {
	try {
		const daylogs = yield call(getDaylogAPI);
		console.log('Saga daylogs???', daylogs);
		yield put({
			type: GET_DAYLOG,
			daylogs: daylogs,
		});
	} catch (e) {
		console.log('fetch Daylogs Error: ', e.message);
	}
}

function* watchFetchDaylog() {
	yield takeEvery(LOAD_DAYLOG, fetchDaylog);
}

function postDaylogAPI(data) {
	console.log('post DAYLOG API CALLED!');
	console.log('data??', data);
	//return axios.post(ROOT_URL+'/daylog', data)
	return 'sent!';
}

function* postDaylog(data) {
	console.log(NEW_DAYLOG, 'called, data is? ', data);
	try {
		yield call(postDaylogAPI, data.newDaylog);
		yield put({ type: POST_DAYLOG });
	} catch (e) {
		console.log('post Daylog Error: ', e.message);
	}
}

function* watchPostDaylog() {
	yield takeEvery(NEW_DAYLOG, postDaylog);
}

export default function* daylogSaga() {
	yield all([fork(watchFetchDaylog), fork(watchPostDaylog)]);
}
