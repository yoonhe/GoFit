import React, { useState, useEffect, useCallback } from 'react';
import YouTube from 'react-youtube';
import {
	SelectVideoTitle,
	SelectedVideoButton,
	Popup,
} from '../style/MainVideoStyle';
import { useSelector, useDispatch } from 'react-redux';
import SearchPopup from './SearchPopup';
import {
	ADD_VIDEO,
	EDIT_VIDEO,
	START_EDIT_MODE,
	END_EDIT_MODE,
	REMOVE_SELECTED_VIDEO,
} from '../reducers/video';
import * as daylogAction from '../reducers/dayLog';
import DaylogInput from './DaylogInput';

const MainVideoItem = ({ videoData, className, index }) => {
	const dispatch = useDispatch();
	const { selectedVideo, isEdit } = useSelector((store) => store.video);
	const [isWatchedVideo, setIsWatchedVideo] = useState(false); // 동영상을 봤는지 안봤는지
	const [playerState, setPlayerState] = useState('unstarted');
	const [showSelectedVideoPopup, setShowSelectedVideoPopup] = useState(false);
	const [showDaylogInputPopup, setshowDaylogInputPopup] = useState(false);

	// console.log('videoData ? ', videoData['Videos.url']);
	// console.log를 찍으면 오류나는 이유 찾는중..

	const videoOptions = {
		height: '600',
		playerVars: {
			autoplay: 0, // 초기 브라우저 진입시 비디오 재생상태 => 0:정지, 1:재생
		},
	};
	const onPlayerReady = (e) => {
		console.log('비디오재생');
		setIsWatchedVideo(true);
	};
	const showPopup = useCallback(() => {
		setShowSelectedVideoPopup(true);
	}, []);

	const clickSearchPopupOkBtn = useCallback(() => {
		if (selectedVideo && !isEdit) {
			let { videoId } = selectedVideo.id;
			let { title } = selectedVideo.snippet;
			let newSelectedVideo = {
				'Videos.url': videoId,
				'Videos.youtubeTitle': title,
			};
			console.log(
				'newSelectedVideo ? ',
				newSelectedVideo,
				'videoId ? ',
				videoId,
				'title ? ',
				title
			);
			dispatch({
				type: ADD_VIDEO,
				selectVideo: newSelectedVideo,
			});
		} else if (selectedVideo) {
			dispatch({
				type: EDIT_VIDEO,
				selectVideo: selectedVideo,
				editVideoIndex: index,
			});
		}
		dispatch({ type: END_EDIT_MODE });
		//dispatch({ type: REMOVE_SELECTED_VIDEO });
		setShowSelectedVideoPopup(false);
	}, [selectedVideo]);

	const changePlayerStateShow = (playerStatus) => {
		// 유투브 플레이어 스테이츠 테스트중
		if (playerStatus.data === -(-1)) {
			setPlayerState('started');
			onPlayerReady();
		} else if (playerStatus.data === -0) {
			setPlayerState('ended'); // ended
			alert('운동끝났습니다! 데이로그를 작성해야 달력에 체크표시가 됩니다!');
		} else if (playerStatus.data === 1) {
			setPlayerState('playing'); // playing
		} else if (playerStatus.data === 2) {
			setPlayerState('paused'); // paused
		} else if (playerStatus.data === 3) {
			setPlayerState('buffering'); // buffering
		} else if (playerStatus.data === 5) {
			setPlayerState('cued'); // cued
		}
	};

	const showDaylogInputPopupOpen = useCallback(() => {
		setshowDaylogInputPopup(true);
	}, []);
	const showDaylogInputClosePopup = useCallback((data) => {
		dispatch(daylogAction.postDaylog(data));
		dispatch({ type: REMOVE_SELECTED_VIDEO });
		setshowDaylogInputPopup(false);
	}, []);

	return (
		<div className={`video-item-wrap ${className}`}>
			<button onClick={showPopup}>비디오 추가버튼</button>
			{!videoData ? (
				<SelectedVideoButton onClick={showPopup}></SelectedVideoButton>
			) : (
				<div
					className={
						playerState === 'ended' ? 'video-item complete' : 'video-item'
					}
				>
					<YouTube
						videoId={videoData['Videos.url']}
						opts={videoOptions}
						onStateChange={changePlayerStateShow}
					/>
				</div>
			)}
			{!videoData ? (
				<SelectVideoTitle>선택된 영상이 없습니다.</SelectVideoTitle>
			) : (
				<SelectVideoTitle>
					<button
						disabled={isWatchedVideo}
						onClick={() => {
							showPopup();
							dispatch({ type: START_EDIT_MODE });
						}}
					>
						수정
					</button>
					{videoData['Videos.youtubeTitle']}
				</SelectVideoTitle>
			)}
			{showSelectedVideoPopup && (
				<Popup>
					<div className="inner">
						<SearchPopup />
						<button onClick={clickSearchPopupOkBtn}>확인</button>
					</div>
				</Popup>
			)}
			<button onClick={showDaylogInputPopupOpen}>Daylog 추가버튼</button>
			{showDaylogInputPopup && (
				<Popup>
					<div className="inner">
						<DaylogInput
							showDaylogInputClosePopup={showDaylogInputClosePopup}
						/>
					</div>
				</Popup>
			)}
		</div>
	);
};

export default MainVideoItem;