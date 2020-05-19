import { call, all, fork, takeEvery, put } from "redux-saga/effects";
import { LOAD_VIDEO, LOAD_VIDEO_SUCCESS } from "../reducers/video";
import axios from "axios";
import { YOUTUBE_API_KEY } from "../youtubeKey";

//.create() 메서드는 사용자가 정의한 구성으로 axios 인스턴스를 생성할 수 있음
export const fetchYoutube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3" //search 빼고 사용
});

function fetchApiData(searchTerm) {
  console.log("searchTerm", searchTerm);
  return fetchYoutube
    .get("/search", {
      params: {
        part: "snippet",
        maxResults: 6,
        key: YOUTUBE_API_KEY,
        q: searchTerm.searchTerm
      }
    })
    .then(res => {
      // console.log("res.data.items", res.data.items);
      const result = res.data.items;
      return result;
    });
}

export function* loadVideos(searchTerm) {
  try {
    const data = yield call(fetchApiData, searchTerm);
    yield put({ type: LOAD_VIDEO_SUCCESS, data });
  } catch (e) {
    console.log(e);
  }
}

export function* watchLoadVideos() {
  yield takeEvery(LOAD_VIDEO, loadVideos);
}

export default function* videoSaga() {
  yield all([fork(watchLoadVideos)]); // fork => 함수 비동기적 호출
}
