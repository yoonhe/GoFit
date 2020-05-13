// Main Video 컴포넌트
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import { SelectedVideoButton } from '../style/MainVideoStyle';

const MainVideo = () => {
  const videoId = 'TUvQKwLWAUg';

  const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
  const [isSelectedVideo, setIsSelectedVideo] = useState(false); // 선택된 동영상이 있는지 없는지

  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // 초기 브라우저 진입시 비디오 재생상태 => 0:정지, 1:재생
    },
  };

  const onPlayerReady = (e) => {
    console.log('비디오재생');
    setIsWatchedVideo(!isWatchedVideo);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="main-video-wrap" style={{ height: '500px' }}>
        {!isSelectedVideo ? (
          <SelectedVideoButton></SelectedVideoButton>
        ) : (
          <>
            <YouTube
              videoId={videoId}
              opts={videoOptions}
              onPlay={onPlayerReady}
            />
            <button disabled={isWatchedVideo}>수정</button>
          </>
        )}
      </div>
      <div>비디오 타이틀</div>
    </div>
  );
};

export default MainVideo;
