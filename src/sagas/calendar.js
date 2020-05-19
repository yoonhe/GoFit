import { put, call, takeEvery } from 'redux-saga/effects';
import {
  HEALTH_LOG_REQUEST,
  requestHealthLogSuccess,
  HEALTH_LOG_SUCCESS,
} from '../reducers/calendar';

function* requestHealthLogAPI(action) {
  let actionData = [1, 15]; // api 요청 응답값 담아줄 예정(현재는 더미 데이터)

  try {
    yield console.log('3. requestHealthLogAPI 호출 성공');
    console.log('action.month(payload) ? ', action.month);
    // payload값이 담김
    // action.[payload key 값]

    yield put({
      type: HEALTH_LOG_SUCCESS,
      data: actionData,
    });
  } catch (err) {
    console.log('requestHealthLogAPI err.response ? ', err.response);
  }
}

export default function* watchRequestHealthLog() {
  yield takeEvery(HEALTH_LOG_REQUEST, requestHealthLogAPI);
}
