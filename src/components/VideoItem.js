import React from 'react';
import * as videoAction from '../reducers/video';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const VideoItem = ({ video, thumbnail, title, VideoAction }) => {
  const handleSelect = () => {
    // console.log('video : ', video);
    console.log('VideoAction : ', VideoAction);
    VideoAction.selectVideo(video);
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
