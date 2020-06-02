import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  HEALTH_LOG_REQUEST,
  requestHealthLogSuccess,
  HEALTH_LOG_SUCCESS,
} from '../reducers/calendar';

import axios from 'axios';
import moment from 'moment';

function requestHealthLogAPI(currentDate) {
  // 서버로 헬스로그 요청 보내는 부분
  return axios.get(`calendar/${currentDate}`);
}

function* requestHealthLog(action) {
  try {
    let actionData = yield requestHealthLogAPI(action.date);
    actionData = actionData.data
      .map((item) => moment(item.createdAt).format('YYYY-MM-DD'))
      .map((item) => item.split('-')[2]);

    console.log('actionData ? ', actionData);

    yield put({
      type: HEALTH_LOG_SUCCESS,
      data: actionData,
    });
  } catch (err) {
    console.error(e);
  }
}

export default function* watchRequestHealthLog() {
  yield takeLatest(HEALTH_LOG_REQUEST, requestHealthLog);
}
