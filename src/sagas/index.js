import { all, fork } from 'redux-saga/effects';

import user from './user';
import video from './video';
import daylog from './daylog';
import calendar from './calendar';

export default function* rootSaga() {
  yield all([fork(calendar)]);
}

// export default function* rootSaga() {
//   yield all([call(user), call(video), call(dayLog), call(calendar)]);
// }
