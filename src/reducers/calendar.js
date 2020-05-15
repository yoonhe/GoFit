export const initialState = {
  healthLog: [1],
};

const MARK_CALENDAR = 'MARK_CALENDAR';

export const markCalendar = (currentLog) => {
  return {
    type: MARK_CALENDAR,
    log: currentLog,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_CALENDAR: {
      // state Log값 불러오기
      return {
        healthLog: [action.log, ...state.healthLog], // 스테이트 '불변성'을 위해 새로운 객체를 만들어줌(스프레드)
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
