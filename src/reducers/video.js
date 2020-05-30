//Store의 state는 오직 액션으로만 변경 가능
import produce from 'immer';

const initialState = {
	videos: [],
	selectedVideo: null,
	selectedDetails: null,
	videoList: [],
	isEdit: false,
	isVideoSelect: false //액션 추가.
};
// action type(명령어). 액션은 하나의 객체
export const LOAD_VIDEO = 'LOAD_VIDEO';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const LOAD_VIDEO_SUCCESS = 'LOAD_VIDEO_SUCCESS';
export const LOAD_VIDEO_DETAILS = 'LOAD_VIDEO_DETAILS';
export const VIDEO_LIST_REQUEST = 'VIDEO_LIST_REQUEST';
export const VIDEO_LIST_SUCCESS = 'VIDEO_LIST_SUCCESS';
export const REMOVE_SELECTED_VIDEO = 'REMOVE_SELECTED_VIDEO';
export const ADD_VIDEO = 'ADD_VIDEO';
export const EDIT_VIDEO = 'EDIT_VIDEO';
export const START_EDIT_MODE = 'START_EDIT_MODE';
export const END_EDIT_MODE = 'END_EDIT_MODE';
export const IS_VIDEO_SELECT = 'IS_VIDEO_SELECT';
export const IS_VIDEO_UNSELECT = 'IS_VIDEO_UNSELECT';

// action creators(액션 메서드). 액션객체를 리턴함
export const loadVideo = searchTerm => ({
	type: LOAD_VIDEO,
	searchTerm
});

export const loadVideoSuccess = videos => ({
	type: LOAD_VIDEO_SUCCESS,
	videos
});

export const selectVideo = selected => ({
	type: SELECT_VIDEO,
	selected
});

export const loadVideoDetails = selected => ({
	type: LOAD_VIDEO_DETAILS,
	selected
});

//액션을 받아서 새로운 상태를 반환함.
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO: {
			return {
				...state
			};
		}
		case LOAD_VIDEO_SUCCESS: {
			// console.log('action.data :', action.data);
			return {
				...state,
				videos: action.data
			};
		}
		case SELECT_VIDEO: {
			// console.log('action.selected :', action.selected);
			return {
				...state,
				selectedVideo: action.selected
			};
		}
		case LOAD_VIDEO_DETAILS: {
			// console.log('선택 영상 디테일 :', action.data);
			return {
				...state,
				selectedDetails: action.data
			};
		}
		case REMOVE_SELECTED_VIDEO: {
      return produce(state, (draft) => {
        draft.selectedVideo = null;
      });
    }
    case ADD_VIDEO: {
      return produce(state, (draft) => {
        draft.videoList = [...state.videoList, action.selectVideo];
      });
    }
    case EDIT_VIDEO: {
      return produce(state, (draft) => {
        draft.videoList[action.editVideoIndex] = action.selectVideo;
      });
    }
    case START_EDIT_MODE: {
      return produce(state, (draft) => {
        draft.isEdit = true;
      });
    }
    case END_EDIT_MODE: {
      return produce(state, (draft) => {
        draft.isEdit = false;
      });
    }
    case VIDEO_LIST_SUCCESS: {
      return produce(state, (draft) => {
        draft.videoList = action.videoList;
      });
    }
		case IS_VIDEO_SELECT: {
			return produce(state, draft => {
				draft.isVideoSelect = true;
			});
		}
		case IS_VIDEO_UNSELECT: {
			return produce(state, draft => {
				draft.isVideoSelect = false;
			});
		}
		default: {
			return state;
		}
	}
};

export default reducer;
