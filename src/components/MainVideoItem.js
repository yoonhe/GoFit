import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import {
  SelectVideoTitle,
  SelectedVideoButton,
  Popup,
  VideoAddBtn,
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
import * as daylogAction from '../reducers/dayLog';
import { LOAD_RANKING } from '../reducers/ranking';
import DaylogInput from './DaylogInput';
import RankingPopup from './RankingPopup';

const MainVideoItem = ({ videoData, className, index, changeVideoIndex }) => {
  const dispatch = useDispatch();
  const { selectedVideo, isEdit, videoList } = useSelector(
    (store) => store.video
  );
  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [playerState, setPlayerState] = useState('unstarted');
  const [showSelectedVideoPopup, setShowSelectedVideoPopup] = useState(false);
  const [showDaylogInputPopup, setshowDaylogInputPopup] = useState(false);
  const [showRankingPopup, setshowRankingPopup] = useState(false); //랭킹팝업 추가
  // console.log('videoData ? ', videoData['Videos.url']);
  // console.log를 찍으면 오류나는 이유 찾는중..

  // console.log('videoData ? ', videoData['Videos.url']);
  // console.log를 찍으면 오류나는 이유 찾는중..
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
    if (selectedVideo && !isEdit) {
      dispatch({
        type: ADD_VIDEO,
        selectVideo: SelectedVideoData(),
      });
    } else if (selectedVideo) {
      dispatch({
        type: EDIT_VIDEO,
        selectVideo: SelectedVideoData(),
        editVideoIndex: index,
      });
    }

    dispatch({ type: END_EDIT_MODE });
    setShowSelectedVideoPopup(false);
  }, [selectedVideo]);

  const changePlayerStateShow = useCallback((playerStatus) => {
    // 유투브 플레이어 스테이트 테스트중
    if (playerStatus.data === -(-1)) {
      setPlayerState('started');
      onPlayerReady();
    } else if (playerStatus.data === -0) {
      setPlayerState('ended'); // ended
      // alert('운동끝났습니다! 데이로그를 작성해야 달력에 체크표시가 됩니다!');
      showDaylogInputPopupOpen();
    }
    /*
      else if (playerStatus.data === 1) {
        setPlayerState('playing'); // playing
      } else if (playerStatus.data === 2) {
        setPlayerState('paused'); // paused
      } else if (playerStatus.data === 3) {
        setPlayerState('buffering'); // buffering
      } else if (playerStatus.data === 5) {
        setPlayerState('cued'); // cued
      }*/
  }, []);

  const showDaylogInputPopupOpen = useCallback(() => {
    setshowDaylogInputPopup(true);
  }, []);
  const showDaylogInputClosePopup = useCallback((data) => {
    dispatch(daylogAction.postDaylog(data));
    dispatch({ type: REMOVE_SELECTED_VIDEO });
    setshowDaylogInputPopup(false);
  }, []);

  const showRankingPopupOpen = useCallback(() => {
    setshowRankingPopup(true);
  }, []);
  const showRankingClosePopup = useCallback(() => {
    dispatch({ type: LOAD_RANKING });
    setshowRankingPopup(false);
  }, []);

  return (
    <div className={`video-item-wrap ${className}`}>
      <button onClick={showRankingPopupOpen}>주간랭킹</button>
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
        <Popup>
          <div className="inner">
            <DaylogInput
              showDaylogInputClosePopup={showDaylogInputClosePopup}
            />
          </div>
        </Popup>
      )}
      {showRankingPopup && (
        <Popup>
          <div className="inner">
            <RankingPopup showRankingClosePopup={showRankingClosePopup} />
          </div>
        </Popup>
      )}
    </div>
  );
};

export default MainVideoItem;
