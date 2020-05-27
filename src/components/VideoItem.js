import React from 'react';
import { useDispatch } from 'react-redux';
import { selectVideo, loadVideoDetails } from '../reducers/video';

const VideoItem = ({ video, thumbnail, title }) => {
  const dispatch = useDispatch();
  const handleSelect = () => {
    //선택한 아이템을 selectedVideo로 담아줌
    dispatch(selectVideo(video));
    //선택한 아이템의 contentDetails를 호출하고 정보를 selectedDetails에 담아줌
    dispatch(loadVideoDetails(video));
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
