// action을 dispatch하여 state를 reducer에 적힌대로 변경한다
// initialState는 reducer와 연결되어 있음

// Action 이름
// 매번 Action명을 문자열로 쓰는 것은 번거롭기대문에 상수사용
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAIL = 'LOAD_USER_FAIL';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';

export const initialState = {
	isLogin: false,
	user: null,
};

// Action
// 하나하나 action 오브젝트를 만드는 걸 수작업으로 하는 것을 피하기위해 함수사용
export const postLogin = (data) => {
	console.log('postlogin', data);
	return {
		type: LOG_IN,
		loginInfo: data,
	};
};
export const postlogout = () => {
	console.log('post logout function');
	return {
		type: LOG_OUT,
	};
};

// Reducer
const reducer = (state = initialState, action) => {
	// reducers는 state와 action을 받아서 다음 새로운 state를 만들어낸다
	// action이 실행되면 reducer가 실행됨..!
	switch (action.type) {
		case LOGIN_SUCCESS: {
			return {
				...state,
				isLogin: true,
				user: action.userInfo,
			};
		}
		case LOGIN_FAIL: {
			return {
				...state,
				isLogin: false,
			};
		}
		case LOG_OUT_SUCCESS: {
			return {
				isLogin: false,
				user: null,
			};
		}
		default: {
			// 정의해준 액션 이외에 다른 액션이 들어오면?
			return {
				...state,
			};
		}
		case LOAD_USER_REQUEST: {
			return {
				...state,
			};
		}
		case LOAD_USER_SUCCESS: {
			return {
				...state,
				user: action.data,
				isLogin: true,
			};
		}
		case LOAD_USER_FAIL: {
			return {
				...state,
				isLogin: false,
			};
		}
	}
};

export default reducer;
