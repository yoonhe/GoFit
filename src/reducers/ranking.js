// action을 dispatch하여 state를 reducer에 적힌대로 변경한다
// initialState는 reducer와 연결되어 있음
// import produce from 'immer';

export const LOAD_RANKING = 'LOAD_RANKING';
export const GET_RANKING = 'GET_RANKING';

export const initialState = {
	ranking: []
};

export const loadRanking = () => ({
	type: LOAD_RANKING
});

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_RANKING: {
			console.log('action.rank: ', action.rank);
			return {
				...state,
				ranking: action.rank
			};
		}
		default: {
			return state;
		}
	}
};

export default reducer;
