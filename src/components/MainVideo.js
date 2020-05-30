// Main Video 컴포넌트
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainVideoWrap } from '../style/MainVideoStyle';
import { REQUEST_VIDEO_LIST } from '../reducers/video';
import MainVideoItem from './MainVideoItem';

const MainVideo = () => {
  const { videoList } = useSelector((store) => store.video);
  const dispatch = useDispatch();
  const [currentVideoIndex, setCurrentVideoIndex] = useState('0');
  // const [NotCompleteVideos, setNotCompleteVideos] = useState([]);

  const clickVideoIndex = useCallback((e) => {
    setCurrentVideoIndex(e.target.innerText);
  }, []);

  useEffect(() => {
    dispatch({
      type: REQUEST_VIDEO_LIST,
    });
  }, []);

  console.log('videoList ? ', videoList);
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
          />
        ) : (
          videoList.map((video, index) => {
            return (
              <MainVideoItem
                className={Number(currentVideoIndex) === index ? 'on' : ''}
                videoData={video}
                key={`video ${index}`}
                index={index}
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
