// store, reducer, action은 여러곳에서 재사용되기 때문에 export 해서 모듈로 만들어준다

export const LOAD_DAYLOG = 'LOAD_DAYLOG';
export const GET_DAYLOG = 'GET_DAYLOG';
export const POST_DAYLOG = 'POST_DAYLOG';
export const NEW_DAYLOG = 'NEW_DAYLOG';


const initialState = {
  daylogs: []
};


export const fetchDaylog = () =>{
  return {
    type: LOAD_DAYLOG
  }
}

export const postDaylog = (data) => {
  return{
    type: NEW_DAYLOG,
    newDaylog: data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAYLOG: {
      // state 새로운 Log 추가하기
      console.log('action.daylogs: ', action.daylogs)
      return {
        ...state,
        daylogs: action.daylogs
      };
    }
    case POST_DAYLOG: {
      return {
        ...state
      }
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
