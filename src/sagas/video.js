import { call, all, fork, takeEvery, put } from 'redux-saga/effects';
import {
	LOAD_VIDEO,
	LOAD_VIDEO_SUCCESS,
	LOAD_VIDEO_DETAILS,
	VIDEO_LIST_REQUEST,
	VIDEO_LIST_SUCCESS
} from '../reducers/video';
import axios from 'axios';
import { YOUTUBE_API_KEY } from '../youtubeKey';

//.create() 메서드는 사용자가 정의한 구성으로 axios 인스턴스를 생성할 수 있음
export const fetchYoutube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	withCredentials: false // <== 요 줄만 추가
});

function fetchApiData(searchTerm) {
	console.log('searchTerm', searchTerm);
	return fetchYoutube
		.get('/search', {
			params: {
				part: 'snippet',
				maxResults: 12,
				key: YOUTUBE_API_KEY,
				q: searchTerm.searchTerm
			}
		})
		.then(res => {
			// console.log('res.data', res.data);
			const result = res.data.items;
			return result;
		});
}

function fetchDataDetails(selected) {
	console.log('selected :', selected);
	console.log('videoId :', selected.selected.id.videoId);
	return fetchYoutube
		.get('/videos', {
			params: {
				part: 'contentDetails',
				maxResults: 1,
				key: YOUTUBE_API_KEY,
				id: selected.selected.id.videoId
			}
		})
		.then(res => {
			console.log('res.data.items', res.data.items);
			const result = res.data.items[0];
			return result;
		});
}

export function* loadVideos(searchTerm) {
	try {
		const data = yield call(fetchApiData, searchTerm);
		yield put({ type: LOAD_VIDEO_SUCCESS, data });
	} catch (e) {
		console.log(e);
	}
}

export function* loadDetails(selected) {
	try {
		const data = yield call(fetchDataDetails, selected);
		console.log('details *** ?? : ', data);
		yield put({ type: LOAD_VIDEO_DETAILS, data });
	} catch (e) {
		console.log(e);
	}
}

export function* watchLoadVideos() {
	yield takeEvery(LOAD_VIDEO, loadVideos);
}

export function* watchLoadDetails() {
	yield takeEvery(LOAD_VIDEO_DETAILS, loadDetails);
}

function requestVideoListApi() {
	return axios.get('/video');
}

function requestDayVideoListApi(date) {
	console.log('date ? ', date);
	return axios.get(`/video/${date}`);
}
function* requestVideoList(action) {
	console.log('requestVideoList 실행 ', action.data);
	try {
		let videoList = yield action.data
			? requestDayVideoListApi(action.data)
			: requestVideoListApi();
		console.log('videoList ? ', videoList.data);
		yield put({ type: VIDEO_LIST_SUCCESS, videoList: videoList.data });
	} catch (e) {
		console.error(e);
	}
}

function* watchRequestVideoList() {
	yield takeEvery(VIDEO_LIST_REQUEST, requestVideoList);
}

export default function* videoSaga() {
	yield all([
		fork(watchLoadVideos),
		fork(watchLoadDetails),
		fork(watchRequestVideoList)
	]); // fork => 함수 비동기적 호출
}
