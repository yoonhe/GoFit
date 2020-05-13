// store, reducer, action은 여러곳에서 재사용되기 때문에 export 해서 모듈로 만들어준다

export const initialState = {
  dayLogs: [],
};

const LOAD_LOG = 'LOAD_LOG';
const ADD_DAYLOG = 'ADD_DAYLOG';

export const load_log = {
  type: LOAD_LOG,
};

export const addLog = {
  type: ADD_DAYLOG,
  data: {
    text: '운동완료!!',
    UserId: 1,
    User: {
      email: 'test@test',
      username: 'test',
      nickname: 'testNickname',
      height: '180',
      weight: '60',
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOG: {
      // state Log값 불러오기
      return {
        ...state, // 스테이트 '불변성'을 위해 새로운 객체를 만들어줌(스프레드)
      };
    }
    case ADD_DAYLOG: {
      // state 새로운 Log 추가하기
      return {
        ...state,
        dayLogs: [action.data, ...state.dayLogs],
      };
    }
    default: {
      // 정의해준 액션 이외에 다른 액션이 들어오면?
      return {
        ...state,
      };
    }
  }
};

export default reducer;

// ...(스프레드)를 지나치게 많이 사용하면 가독성이 떨어져서 immer라는 라이브러리를 사용함
