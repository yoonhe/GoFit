import React, { useState } from 'react';
import { useDispatch, useEffect } from 'react-redux';
import { selectVideo, loadVideoDetails } from '../reducers/video';
import { GridItem } from '../style/PopupStyle';

const VideoItem = ({ video, thumbnail, title, onClickRadio }) => {
	// const [isSelect, setSelect] = useState(false);
	const dispatch = useDispatch();

	const handleChange = () => {
		// setSelect(!isSelect);
		//선택한 아이템을 selectedVideo로 담아줌
		dispatch(selectVideo(video));
		//선택한 아이템의 contentDetails를 호출하고 정보를 selectedDetails에 담아줌.
		dispatch(loadVideoDetails(video));
	};

	return (
		<div onClick={onClickRadio}>
			<GridItem>
				<div>
					<input
						type='radio'
						name='videoRadio'
						// checked={isSelect}
						onChange={handleChange}
					/>
				</div>
				<img src={thumbnail} />
				<div>{title.slice(0, 20).concat('...')}</div>
			</GridItem>
		</div>
	);
};

export default VideoItem;
