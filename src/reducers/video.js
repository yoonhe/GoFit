//Store의 state는 오직 액션으로만 변경 가능
const initialState = {
  videos: [],
  selectedVideo: [],
};
// action type(명령어). 액션은 하나의 객체
export const LOAD_VIDEO = 'LOAD_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const LOAD_VIDEO_SUCCESS = 'LOAD_VIDEO_SUCCESS';

// action creators(액션 메서드). 액션객체를 리턴함
export const loadVideo = (searchTerm) => ({
  type: LOAD_VIDEO,
  searchTerm,
});
export const loadVideoSuccess = (videos) => ({
  type: LOAD_VIDEO_SUCCESS,
  videos,
});
export const selectVideo = (selected) => ({
  type: SELECT_VIDEO,
  selected,
});

//액션을 받아서 새로운 상태를 반환함.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_VIDEO: {
      return {
        ...state,
      };
    }
    case LOAD_VIDEO_SUCCESS: {
      console.log('action.data :', action.data);
      return {
        ...state,
        videos: action.data,
      };
    }
    case SELECT_VIDEO: {
      console.log('action.selected :', action.selected);
      return {
        ...state,
        selectedVideo: action.selected,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
