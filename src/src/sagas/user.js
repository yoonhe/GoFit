import { call, all, fork, takeEvery, put } from 'redux-saga/effects';
import { LOG_IN, LOG_OUT, LOGIN_SUCCESS, LOGIN_FAIL } from '../reducers/user';

function loginAPI() {
  // 서버에 login 요청을 하는 부분
  return true;
}

function* login() {
  try {
    yield call(loginAPI);
    // call => 함수 동기적 호출
    // 서버에 로그인 요청 성공시 다음줄이 실행됨
    yield put({
      // put은 dispatch랑 동일
      type: LOGIN_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패시 다음 put 실행
    console.error(e);
    yield put({
      type: LOGIN_FAIL,
    });
  }
}
function* watchLogin() {
  // takeLatest => LOG_IN 액션이 dispatch 되길 기다렸다가 dispatch 될 때 login 제네레이터를 호출한다
  yield takeEvery(LOG_IN, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]); // fork => 함수 비동기적 호출
}
