import React from 'react';
import { useDispatch } from 'react-redux';
import { selectVideo } from '../reducers/video';

const VideoItem = ({ video, thumbnail, title }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(selectVideo(video));
  };

  return (
    <div>
      <input type='radio' name='select-item' onChange={handleSelect} />
      <img src={thumbnail} />
      <div>{title.slice(0, 24).concat('...')}</div>
    </div>
  );
};

export default VideoItem;
