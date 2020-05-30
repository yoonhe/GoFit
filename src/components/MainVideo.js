// Main Video 컴포넌트
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainVideoWrap } from '../style/MainVideoStyle';
import { VIDEO_LIST_REQUEST } from '../reducers/video';
import MainVideoItem from './MainVideoItem';

const MainVideo = () => {
  const { videoList } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  // console.log('videoList.length ? ', !!videoList.length);
  const lastIndex = !videoList.length ? 0 : videoList.length - 1;
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const clickVideoIndex = useCallback((e) => {
    setCurrentVideoIndex(Number(e.target.innerText));
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
  useEffect(() => {
    setCurrentVideoIndex(lastIndex);
  }, [lastIndex]);

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
                className={currentVideoIndex === index ? 'on' : ''}
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
                  className={currentVideoIndex === index ? 'on' : ''}
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
