import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import {
  SelectVideoTitle,
  SelectedVideoButton,
  VideoAddBtn,
  Popup,
} from '../style/MainVideoStyle';
import { Popup2 } from '../style/DaylogStyle';
import { useSelector, useDispatch } from 'react-redux';
import SearchPopup from './SearchPopup';
import {
  ADD_VIDEO,
  EDIT_VIDEO,
  START_EDIT_MODE,
  END_EDIT_MODE,
  REMOVE_SELECTED_VIDEO,
  IS_VIDEO_UNSELECT,
} from '../reducers/video';
import * as daylogAction from '../reducers/dayLog';
import { LOAD_RANKING } from '../reducers/ranking';
import DaylogInput from './DaylogInput';
import RankingPopup from './RankingPopup';

const MainVideoItem = ({ videoData, className, index, changeVideoIndex }) => {
  const dispatch = useDispatch();
  const { isVideoSelect, selectedVideo, isEdit, videoList } = useSelector(
    (store) => store.video
  );
  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [playerState, setPlayerState] = useState('unstarted');
  const [showSelectedVideoPopup, setShowSelectedVideoPopup] = useState(false);
  const [showDaylogInputPopup, setshowDaylogInputPopup] = useState(false);
  const videoOptions = {
    height: '600',
    playerVars: {
      autoplay: 0, // 초기 브라우저 진입시 비디오 재생상태 => 0:정지, 1:재생
    },
  };
  const onPlayerReady = (e) => {
    setIsWatchedVideo(true);
  };
  const showPopup = useCallback(() => {
    setShowSelectedVideoPopup(true);
  }, []);

  const SelectedVideoData = useCallback(() => {
    const { videoId } = selectedVideo && selectedVideo.id;
    const { title } = selectedVideo && selectedVideo.snippet;
    const newSelectedVideo = selectedVideo && {
      'Videos.url': videoId,
      'Videos.youtubeTitle': title,
    };
    return newSelectedVideo;
  }, [selectedVideo]);

  const clickSearchPopupOkBtn = useCallback(() => {
    console.log('isVideoSelect ? ', isVideoSelect);
    if (isVideoSelect && selectedVideo && !isEdit) {
      dispatch({
        type: ADD_VIDEO,
        selectVideo: SelectedVideoData(),
      });
    } else if (isVideoSelect && selectedVideo) {
      dispatch({
        type: EDIT_VIDEO,
        selectVideo: SelectedVideoData(),
        editVideoIndex: index,
      });
    }

    dispatch({ type: END_EDIT_MODE });
    setShowSelectedVideoPopup(false);
  }, [selectedVideo, isVideoSelect]);

  const changePlayerStateShow = useCallback((playerStatus) => {
    // 유투브 플레이어 스테이트 테스트중
    if (playerStatus.data === -(-1)) {
      setPlayerState('started');
      onPlayerReady();
    } else if (playerStatus.data === -0) {
      setPlayerState('ended'); // ended
      showDaylogInputPopupOpen();
    }
  }, []);

  const showDaylogInputPopupOpen = useCallback(() => {
    setshowDaylogInputPopup(true);
  }, []);
  const showDaylogInputClosePopup = useCallback((data) => {
    dispatch(daylogAction.postDaylog(data));
    dispatch({ type: REMOVE_SELECTED_VIDEO });
    setshowDaylogInputPopup(false);
  }, []);

  return (
    <div className={`video-item-wrap ${className}`}>
      {!videoData ? (
        <SelectedVideoButton onClick={showPopup}></SelectedVideoButton>
      ) : (
        <div
          className={
            playerState === 'ended' || videoData['Videos.id']
              ? 'video-item complete'
              : 'video-item'
          }
        >
          {videoList.length < 3 && videoList.length === index + 1 && (
            <VideoAddBtn
              onClick={showPopup}
              isShow={playerState === 'ended' || videoData['Videos.id']}
            >
              <button>+</button>
            </VideoAddBtn>
          )}
          <YouTube
            videoId={videoData['Videos.url']}
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
            disabled={isWatchedVideo || videoData['Videos.id']}
            onClick={() => {
              showPopup();
              dispatch({ type: START_EDIT_MODE });
              dispatch({ type: IS_VIDEO_UNSELECT });
            }}
          >
            수정
          </button>
          {videoData['Videos.youtubeTitle']}
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
      {showDaylogInputPopup && (
        <Popup2>
          <div className="inner">
            <DaylogInput
              showDaylogInputClosePopup={showDaylogInputClosePopup}
            />
          </div>
        </Popup2>
      )}
    </div>
  );
};

export default MainVideoItem;
