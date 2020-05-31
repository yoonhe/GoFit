import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VideoItem from './VideoItem';
import { IS_VIDEO_SELECT } from '../reducers/video';

const ResultVideos = () => {
  const videos = useSelector((state) => state.video.videos);
  const dispatch = useDispatch();
  console.log('store.video.videos :', videos);

  const onClickRadio = (e) => {
    e.target.checked && dispatch({ type: IS_VIDEO_SELECT });
  };

  return (
    <div>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.etag}
            video={video}
            thumbnail={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            onClickRadio={onClickRadio}
          />
        );
      })}
    </div>
  );
};

export default ResultVideos;
