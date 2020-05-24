import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  HEALTH_LOG_REQUEST,
  requestHealthLogSuccess,
  HEALTH_LOG_SUCCESS,
} from '../reducers/calendar';

import axios from 'axios';

function requestHealthLogAPI(currentDate) {
  // 서버로 헬스로그 요청 보내는 부분
  return axios.get(`calendar/${currentDate}`);
}

function* requestHealthLog(action) {
  try {
    let actionData = yield requestHealthLogAPI(action.date);
    console.log('3. requestHealthLogAPI 호출 성공');
    actionData = actionData.data
      .map((item) => item.createdAt.split('T')[0])
      .map((item) => {
        return Number(item.split('-')[2]);
      });

    yield put({
      type: HEALTH_LOG_SUCCESS,
      data: actionData,
    });
  } catch (err) {
    console.log('requestHealthLogAPI err.response ? ', err.response);
  }
}

export default function* watchRequestHealthLog() {
  yield takeLatest(HEALTH_LOG_REQUEST, requestHealthLog);
}
