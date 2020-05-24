import React from 'react';
import { useSelector } from 'react-redux';
import VideoItem from './VideoItem';

const ResultVideos = () => {
  const videos = useSelector(state => state.video.videos);
  console.log('store.video.videos :', videos);

  return (
    <div>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.etag}
            video={video}
            thumbnail={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
          />
        );
      })}
    </div>
  );
};

export default ResultVideos;
