import produce from 'immer';

export const initialState = {
  // currentMonth: '',
  healthLog: null,
};

export const MARK_CALENDAR = 'MARK_CALENDAR';
export const HEALTH_LOG_REQUEST = 'HEALTH_LOG_REQUEST';
export const HEALTH_LOG_SUCCESS = 'HEALTH_LOG_SUCCESS';
// export const HEALTH_LOG_FAILURE = 'HEALTH_LOG_FAILURE';

export const markCalendar = (currentLog) => {
  return {
    type: MARK_CALENDAR,
    log: currentLog,
  };
};

export const requestHealthLog = (currentDate) => {
  console.log('2. requestHealthLog 실행');
  return {
    type: HEALTH_LOG_REQUEST,
    date: currentDate,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_CALENDAR: {
      // state Log값 불러오기
      // return {
      //   healthLog: [action.log, ...state.healthLog], // 스테이트 '불변성'을 위해 새로운 객체를 만들어줌(스프레드)
      // };
      return produce(state, (draft) => {
        draft.healthLog = [action.log, ...state.healthLog];
      });
    }

    case HEALTH_LOG_SUCCESS: {
      return produce(state, (draft) => {
        draft.healthLog = action.data;
      });
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
