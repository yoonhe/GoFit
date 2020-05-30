// root reducer

import { combineReducers } from 'redux'; // 흗어진 리듀서를 하나로 묶어줌
import user from './user';
import dayLog from './dayLog';
import calendar from './calendar';
import video from './video';
import ranking from './ranking';

const rootReducer = combineReducers({
	calendar,
	dayLog,
	user,
	video,
	ranking
});

export default rootReducer;
