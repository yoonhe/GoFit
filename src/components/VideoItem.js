import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	selectVideo,
	loadVideoDetails,
	IS_VIDEO_SELECT,
	IS_VIDEO_UNSELECT
} from '../reducers/video';

const VideoItem = ({ video, thumbnail, title }) => {
	const [isSelect, setSelect] = useState(false);
	const dispatch = useDispatch();

	const toggle = () => {
		setSelect = !isSelect;
		return setSelect === true
			? dispatch({ type: IS_VIDEO_SELECT })
			: dispatch({ type: IS_VIDEO_UNSELECT });
	};
	const handleChange = () => {
		//선택한 아이템을 selectedVideo로 담아줌
		dispatch(selectVideo(video));
		//선택한 아이템의 contentDetails를 호출하고 정보를 selectedDetails에 담아줌.
		dispatch(loadVideoDetails(video));
	};

	return (
		<div>
			<input
				type='radio'
				name='select-item'
				value={toggle}
				onChange={handleChange}
			/>
			<img src={thumbnail} />
			<div>{title.slice(0, 24).concat('...')}</div>
		</div>
	);
};

export default VideoItem;
