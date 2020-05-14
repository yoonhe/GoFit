// Main Video 컴포넌트
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import {
  MainVideoWrap,
  SelectedVideoButton,
  SelectVideoTitle,
} from '../style/MainVideoStyle';

const MainVideo = () => {
  const dummyData = {
    videoId: 'TUvQKwLWAUg',
    videoTitle: '이지은 종아리 스트레칭',
  };

  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [isSelectedData, setIsSelectedData] = useState(dummyData); // 선택된 동영상이 있는지 없는지
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
    if (playerStatus.data == -1) {
      setPlayerState('unstarted');
    } else if (playerStatus.data == 0) {
      setPlayerState('ended'); //  = yellow
    } else if (playerStatus.data == 1) {
      setPlayerState('playing'); //  = green
    } else if (playerStatus.data == 2) {
      setPlayerState('paused'); //  = red
    } else if (playerStatus.data == 3) {
      setPlayerState('buffering'); // buffering = purple
    } else if (playerStatus.data == 5) {
      setPlayerState('cued'); // cued = orange
    }
    console.log('playerState ?', playerState);
  };

  return (
    <div style={{ width: '100%' }}>
      <p>비디오 상태 : {playerState}</p>
      <MainVideoWrap>
        {!isSelectedData ? (
          <SelectedVideoButton></SelectedVideoButton>
        ) : (
          <>
            <YouTube
              videoId={isSelectedData.videoId}
              opts={videoOptions}
              onPlay={onPlayerReady}
              onStateChange={changePlayerStateShow}
            />
          </>
        )}
      </MainVideoWrap>
      {!isSelectedData ? (
        <SelectVideoTitle>선택된 영상이 없습니다.</SelectVideoTitle>
      ) : (
        <SelectVideoTitle>
          <button disabled={isWatchedVideo}>수정</button>
          {isSelectedData.videoTitle}
        </SelectVideoTitle>
      )}
    </div>
  );
};

export default MainVideo;
