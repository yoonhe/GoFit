// Main Video 컴포넌트

import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import {
  MainVideoWrap,
  SelectedVideoButton,
  SelectVideoTitle,
} from '../style/MainVideoStyle';
import { useSelector, useDispatch } from 'react-redux';
import { markCalendar } from '../reducers/calendar';
import moment from 'moment';

const MainVideo = () => {
  // const dummyData = null;
  const dummyData = {
    videoTitle:
      '[EN/CH]하체비만 탈출 첫번째는 골반교정! 저녁에도 아침같은 다리 완성 (Lower Body Stretching, 다노레전드스트레칭, 골반교정스트레칭) ㅣ 다노티비',
    videoId: 'VVn5IUM8sms',
  };

  const dispatch = useDispatch();
  const { healthLog } = useSelector((store) => store.calendar);
  console.log('비디오 healthLog ? ', healthLog);
  const todayDate = moment().format('D');

  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [isSelectedVideoData, setIsSelectedVideoData] = useState(dummyData); // 선택된 동영상이 있는지 없는지
  console.log('isSelectedVideoData ? ', isSelectedVideoData);
  const [playerState, setPlayerState] = useState('unstarted');

  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 초기 브라우저 진입시 비디오 재생상태 => 0:정지, 1:재생
    },
  };

  const onPlayerReady = (e) => {
    console.log('비디오재생');
    setIsWatchedVideo(true);
  };

  const changePlayerStateShow = (playerStatus) => {
    // 유투브 플레이어 스테이츠 테스트중
    if (playerStatus.data === -(-1)) {
      setPlayerState('started');
    } else if (playerStatus.data === -0) {
      onPlayerReady();
      setPlayerState('ended'); // ended
      alert('운동끝났습니다! 오늘도 수고 많으셨어요^^');
      dispatch(markCalendar(Number(todayDate)));
      // 데이터베이스에 저장해줘야 하지 않을까?...
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

  useEffect(() => {}, []);

  return (
    <div style={{ width: '100%' }}>
      <p>비디오 상태 : {playerState}</p>
      <MainVideoWrap>
        {!isSelectedVideoData ? (
          <SelectedVideoButton></SelectedVideoButton>
        ) : (
          <div
            className={
              playerState === 'ended' ? 'video-item complete' : 'video-item'
            }
          >
            <YouTube
              videoId={isSelectedVideoData.videoId}
              opts={videoOptions}
              onStateChange={changePlayerStateShow}
            />
          </div>
        )}
      </MainVideoWrap>
      {!isSelectedVideoData ? (
        <SelectVideoTitle>선택된 영상이 없습니다.</SelectVideoTitle>
      ) : (
        <SelectVideoTitle>
          <button disabled={isWatchedVideo}>수정</button>
          {isSelectedVideoData.videoTitle}
        </SelectVideoTitle>
      )}
    </div>
  );
};

export default MainVideo;
