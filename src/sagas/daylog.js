import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import {
	GET_DAYLOG,
	LOAD_DAYLOG,
	POST_DAYLOG,
	NEW_DAYLOG,
} from '../reducers/dayLog';
import axios from 'axios';
import moment from 'moment';
const ROOT_URL = 'http://localhost:7777/api/daylog/daylog/';
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
	/* 	const today = moment().format('YYYY-MM-DD');
	const getURL = ROOT_URL + today;
    console.log('get URL Momth', getURL); */
	return axios.get(ROOT_URL).then((res) => {
		console.log('axios get data', res);
		return res;
	});
	//return axios.get(ROOT_URL/daylog)
	//return daylogSample;
}

function* fetchDaylog() {
	try {
		const daylogs = yield call(getDaylogAPI);
		console.log('Saga daylogs???', daylogs);
		yield put({
			type: GET_DAYLOG,
			daylogs: daylogs.data,
		});
	} catch (e) {
		console.log('fetch Daylogs Error: ', e.message);
	}
}

function* watchFetchDaylog() {
	yield takeEvery(LOAD_DAYLOG, fetchDaylog);
}

function youtubeTimeConvert(youtubetime) {
	var hourRegex = new RegExp('[0-9]{1,2}H', 'gi');
	var minRegex = new RegExp('[0-9]{1,2}M', 'gi');
	var secRegex = new RegExp('[0-9]{1,2}S', 'gi');

	var hour = hourRegex.exec(youtubetime);
	var min = minRegex.exec(youtubetime);
	var sec = secRegex.exec(youtubetime);

	if (hour !== null) {
		hour = hour.toString().split('H')[0] + ':';
	} else {
		hour = '00:';
	}
	if (min !== null) {
		min = min.toString().split('M')[0] + ':';
		if (min.length < 2) {
			min = '0' + min + ':';
		}
	} else {
		min = '00:';
	}
	if (sec !== null) {
		sec = sec.toString().split('S')[0];
		if (sec.length < 2) {
			sec = '0' + sec;
		}
	} else {
		sec = '00';
	}
	const duration = hour + min + sec;
	return duration;
}

function postDaylogAPI(data) {
	//message, youtubeTitle, youtubeTime, url, weight, water
	console.log('post DAYLOG API CALLED!');
	console.log('data??', data);
	//youtube time - select video 의 detail 정보 받으면 전송
	const water = data.waterArr ? data.waterArr.length : null;
	const sendData = {
		message: data.message,
		youtubeTitle: data.selectVideo.snippet.title,
		youtubeTime: youtubeTimeConvert(data.youtubeTime),
		url: data.selectVideo.id.videoId,
		weight: data.weight,
		water: water,
		tags: data.tags,
	};
	return axios.post(ROOT_URL, sendData).then((res) => {
		console.log('res', res);
		//console.log('sendData.youtubeTime', sendData.youtubeTime);
		return data;
	});
}

function* postDaylog(data) {
	console.log(NEW_DAYLOG, 'called, data is? ', data);
	try {
		yield call(postDaylogAPI, data.newDaylog);
		yield put({ type: POST_DAYLOG });
		yield put({ type: LOAD_DAYLOG });
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
