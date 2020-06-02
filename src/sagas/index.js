import { all, call, fork } from 'redux-saga/effects';

import user from './user';
import video from './video';
import daylog from './daylog';
import calendar from './calendar';
import ranking from './ranking';

import axios from 'axios';
axios.defaults.baseURL = 'http://13.125.15.2:80/api';

export default function* rootSaga() {
  yield all([
    fork(calendar),
    fork(video),
    fork(user),
    fork(daylog),
    fork(ranking),
  ]);
}

// export default function* rootSaga() {
//   yield all([call(user), call(video), call(dayLog), call(calendar)]);
// }
