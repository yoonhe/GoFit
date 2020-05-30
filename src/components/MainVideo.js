// Main Video 컴포넌트
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainVideoWrap } from '../style/MainVideoStyle';
import { VIDEO_LIST_REQUEST } from '../reducers/video';
import MainVideoItem from './MainVideoItem';

const MainVideo = () => {
  const { videoList } = useSelector((store) => store.video);
  const lastVideoIndex = videoList.length && videoList.length - 1;
  const dispatch = useDispatch();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(
    `${lastVideoIndex}`
  );

  const clickVideoIndex = useCallback((e) => {
    setCurrentVideoIndex(e.target.innerText);
  }, []);

  const changeVideoIndex = useCallback((index) => {
    console.log('changeVideoIndex 클릭됨 ? ', index);
    setCurrentVideoIndex(index);
  }, []);

  useEffect(() => {
    dispatch({
      type: VIDEO_LIST_REQUEST,
    });
  }, []);

  console.log('currentVideoIndex ? ', currentVideoIndex);
  return (
    <>
      <MainVideoWrap>
        {videoList.length < 2 ? (
          <MainVideoItem
            className={'on'}
            // videoData={videoList[0]}
            videoData={videoList[0]}
            key={`video ${0}`}
            index={0}
            changeVideoIndex={changeVideoIndex}
          />
        ) : (
          videoList.map((video, index) => {
            return (
              <MainVideoItem
                className={Number(currentVideoIndex) === index ? 'on' : ''}
                videoData={video}
                key={`video ${index}`}
                index={index}
                changeVideoIndex={changeVideoIndex}
              />
            );
          })
        )}
        {videoList && videoList.length > 1 && (
          <ul className="video-index-button">
            {videoList.map((video, index) => {
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
    </>
  );
};

export default MainVideo;
