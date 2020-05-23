import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VideoItem from './VideoItem';
import * as videoAction from '../reducers/video';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ResultVideos = props => {
  const videos = useSelector(state => state.video.videos);
  console.log('store.video.videos :', videos);
  const { VideoAction } = props;

  return (
    <div>
      {videos.map(video => {
        return (
          <VideoItem
            key={video.etag}
            video={video}
            thumbnail={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            VideoAction={VideoAction}
          />
        );
      })}
    </div>
  );
};

export default connect(
  state => ({}),
  dispatch => ({
    VideoAction: bindActionCreators(videoAction, dispatch)
  })
)(ResultVideos);
