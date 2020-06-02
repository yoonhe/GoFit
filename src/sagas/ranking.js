import { all, fork, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_RANKING, GET_RANKING } from '../reducers/ranking';
import axios from 'axios';

// const ROOT_URL = 'http://localhost:7777/api/user/rank';

function getRankAPI() {
  // console.log('get Rank!!??');
  return axios.get('/user/rank').then((res) => {
    console.log('랭킹 확인 :', res.data);
    return res.data;
  });
}

function* fetchRank() {
  try {
    const rank = yield call(getRankAPI);
    yield put({ type: GET_RANKING, rank });
  } catch (e) {
    console.log('fetch Rank Error :', e.message);
  }
}

function* watchFetchRank() {
  yield takeEvery(LOAD_RANKING, fetchRank);
}

export default function* rankingSaga() {
  yield all([fork(watchFetchRank)]);
}
