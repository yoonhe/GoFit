export const initialState = {
  currentVideo: {},
};

const LOAD_ViDEO = 'LOAD_ViDEO';

export const load_log = {
  type: LOAD_ViDEO,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOG: {
      // state Log값 불러오기
      return {
        ...state, // 스테이트 '불변성'을 위해 새로운 객체를 만들어줌(스프레드)
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
