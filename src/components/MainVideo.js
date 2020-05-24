// Main Video 컴포넌트

import React, { useState, useCallback } from 'react';
import { MainVideoWrap } from '../style/MainVideoStyle';
import { SelectedVideoButton, SelectVideoTitle } from '../style/MainVideoStyle';
import MainVideoItem from './MainVideoItem';

const MainVideo = () => {
  const dummyData = null;
  // const dummyData = [
  //   {
  //     videoTitle:
  //       '[EN/CH]하체비만 탈출 첫번째는 골반교정! 저녁에도 아침같은 다리 완성 (Lower Body Stretching, 다노레전드스트레칭, 골반교정스트레칭) ㅣ 다노티비',
  //     videoId: 'VVn5IUM8sms',
  //   },
  //   {
  //     videoTitle:
  //       '(ENG) 평생 가지고 살던 종아리알! 이 스트레칭으로 걸그룹 종아리를 만들 수 있습니다 [바로시작(3:48)]',
  //     videoId: 'TUvQKwLWAUg',
  //   },
  //   {
  //     videoTitle:
  //       '(ENG) [얼굴붓기/사각턱/광대] 매일5분! 잠깐 따라하면 윤곽주사 보다 효과좋은 셀프 경락 마사지법',
  //     videoId: 'Mb7aiodU7yM',
  //   },
  // ];

  // const dispatch = useDispatch();
  const [isSelectedVideoData, setIsSelectedVideoData] = useState(dummyData); // 선택된 동영상이 있는지 없는지
  const [currentVideoIndex, setCurrentVideoIndex] = useState('0');

  const clickVideoIndex = useCallback((e) => {
    setCurrentVideoIndex(e.target.innerText);
  }, []);

  return (
    <MainVideoWrap>
      {!isSelectedVideoData ? (
        <SelectedVideoButton></SelectedVideoButton>
      ) : (
        isSelectedVideoData.map((video, index) => {
          return (
            <MainVideoItem
              className={Number(currentVideoIndex) === index ? 'on' : ''}
              videoData={video}
              key={`video ${index}`}
            />
          );
        })

        // 이방법은 ... 뭔가 이상...?
        // <MainVideoItem
        //   videoData={isSelectedVideoData[currentVideoIndex]}
        //   key={`video ${currentVideoIndex}`}
        // />
      )}
      {isSelectedVideoData && isSelectedVideoData.length > 1 && (
        <ul className="video-index-button">
          {isSelectedVideoData.map((video, index) => {
            return (
              <li
                className={Number(currentVideoIndex) === index ? 'on' : ''}
                onClick={clickVideoIndex}
                key={`videoIndex${index}`}
              >
                {index}
              </li>
            );
          })}
        </ul>
      )}
    </MainVideoWrap>
  );
};

export default MainVideo;
