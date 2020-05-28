import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import {
  SelectVideoTitle,
  SelectedVideoButton,
  Popup,
} from '../style/MainVideoStyle';
import { useSelector, useDispatch } from 'react-redux';
import SearchPopup from './SearchPopup';
import {
  ADD_VIDEO,
  EDIT_VIDEO,
  START_EDIT_MODE,
  END_EDIT_MODE,
  REMOVE_SELECTED_VIDEO,
} from '../reducers/video';
import DaylogInput from './DaylogInput';

const MainVideoItem = ({ videoData, className, index }) => {
  console.log('videoData ? ', videoData, 'className ? ', className);
  const dispatch = useDispatch();
  const { selectedVideo, isEdit } = useSelector((store) => store.video);
  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [playerState, setPlayerState] = useState('unstarted');
  const [showSelectedVideoPopup, setShowSelectedVideoPopup] = useState(false);
  // const [isSelectedVideoData, setIsSelectedVideoData] = useState([]); // 선택된 동영상이 있는지 없는지
  const videoOptions = {
    height: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 초기 브라우저 진입시 비디오 재생상태 => 0:정지, 1:재생
    },
  };
  const onPlayerReady = (e) => {
    console.log('비디오재생');
    setIsWatchedVideo(true);
  };
  const showPopup = useCallback(() => {
    setShowSelectedVideoPopup(true);
  }, []);
  const clickSearchPopupOkBtn = useCallback(() => {
    if (selectedVideo && !isEdit) {
      dispatch({
        type: ADD_VIDEO,
        selectVideo: selectedVideo,
      });
    } else if (selectedVideo) {
      dispatch({
        type: EDIT_VIDEO,
        selectVideo: selectedVideo,
        editVideoIndex: index,
      });
    }
    dispatch({ type: END_EDIT_MODE });
    dispatch({ type: REMOVE_SELECTED_VIDEO });
    setShowSelectedVideoPopup(false);
  }, [selectedVideo]);

  const changePlayerStateShow = (playerStatus) => {
    // 유투브 플레이어 스테이츠 테스트중
    if (playerStatus.data === -(-1)) {
      setPlayerState('started');
      onPlayerReady();
    } else if (playerStatus.data === -0) {
      setPlayerState('ended'); // ended
      alert('운동끝났습니다! 데이로그를 작성해야 달력에 체크표시가 됩니다!');
      // 데이로그 컴포넌트 팝업 노출 시켜야함
      // dispatch(markCalendar(Number(todayDate))); => 데이로그 작성 후 보낼예정
    } else if (playerStatus.data === 1) {
      setPlayerState('playing'); // playing
    } else if (playerStatus.data === 2) {
      setPlayerState('paused'); // paused
    } else if (playerStatus.data === 3) {
      setPlayerState('buffering'); // buffering
    } else if (playerStatus.data === 5) {
      setPlayerState('cued'); // cued
    }
  };

  return (
    <div className={`video-item-wrap ${className}`}>
      <button onClick={showPopup}>비디오 추가버튼</button>
      {!videoData ? (
        <SelectedVideoButton onClick={showPopup}></SelectedVideoButton>
      ) : (
        <div
          className={
            playerState === 'ended' ? 'video-item complete' : 'video-item'
          }
        >
          <YouTube
            videoId={videoData.id.videoId}
            opts={videoOptions}
            onStateChange={changePlayerStateShow}
          />
        </div>
      )}
      {!videoData ? (
        <SelectVideoTitle>선택된 영상이 없습니다.</SelectVideoTitle>
      ) : (
        <SelectVideoTitle>
          <button
            disabled={isWatchedVideo}
            onClick={() => {
              showPopup();
              dispatch({ type: START_EDIT_MODE });
            }}
          >
            수정
          </button>
          {videoData.snippet.title}
        </SelectVideoTitle>
      )}
      {showSelectedVideoPopup && (
        <Popup>
          <div className="inner">
            <SearchPopup />
            <button onClick={clickSearchPopupOkBtn}>확인</button>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default MainVideoItem;
