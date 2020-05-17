import {all, fork, call, put, takeEvery} from 'redux-saga/effects';
import { LOG_IN, LOG_OUT, LOGIN_SUCCESS, LOGIN_FAIL } from '../reducers/user'

const testaccount = {
  email: 'test',
  password: 'test',
  user_id: 1,
  height: 160,
  weight: 50,
  username: 'testuser'
}

function loginAPI(data) {
  // 서버에 login 요청을 하는 부분
  console.log('login API called')
  console.log('user info will get', data)
  console.log('testInfo', testaccount)
  if(data.email === testaccount.email) {
    console.log('user email smae')
    if(data.password === testaccount.password) {
      console.log('user password same')
      return testaccount
    }
  }
  else{
    return false;
  }
  // axios.post(ROOT_URL, data)
}

function* login(data) {
  console.log('login called?')
  try {
    const userInfo = yield call(loginAPI, data.loginInfo);
    // call => 함수 동기적 호출
    // 서버에 로그인 요청 성공시 다음줄이 실행됨
    console.log('LOGIN userINFO???', userInfo)
    if(userInfo){
      yield put({
        // put은 dispatch랑 동일
        type: LOGIN_SUCCESS,
        userInfo
      });
    }else{
      yield put({
        type:LOGIN_FAIL
      })
    }
  } catch (e) {
    // loginAPI 실패시 다음 put 실행
    console.error(LOGIN_FAIL, e.msessage)
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN, login)
}

export default function* userSaga() {
  yield all([fork(watchLogin)]); // fork => 함수 비동기적 호출
}
