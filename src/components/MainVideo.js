// Main Video 컴포넌트
import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MainVideoWrap, Popup } from '../style/MainVideoStyle';
import { RankPopupStyle } from '../style/RankingStyle';
import { VIDEO_LIST_REQUEST } from '../reducers/video';
import MainVideoItem from './MainVideoItem';
import { LOAD_RANKING } from '../reducers/ranking';
import RankingPopup from './RankingPopup';

const MainVideo = () => {
	const { videoList } = useSelector(store => store.video);
	const dispatch = useDispatch();
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [showRankingPopup, setshowRankingPopup] = useState(false); //랭킹팝업 추가

	const clickVideoIndex = useCallback(e => {
		setCurrentVideoIndex(Number(e.target.innerText));
	}, []);

	useEffect(() => {
		dispatch({
			type: VIDEO_LIST_REQUEST
		});
	}, []);

	const lastIndex = !videoList.length ? 0 : videoList.length - 1;
	useEffect(() => {
		setCurrentVideoIndex(lastIndex);
	}, [lastIndex]);

	const showRankingPopupOpen = useCallback(() => {
		dispatch({ type: LOAD_RANKING }); //이 부분 오류 수정했습니다.
		setshowRankingPopup(true);
	}, []);

	const showRankingClosePopup = useCallback(() => {
		setshowRankingPopup(false);
	}, []);

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
								className={
									currentVideoIndex === index ? 'on' : ''
								}
								videoData={video}
								key={`video ${index}`}
								index={index}
							/>
						);
					})
				)}
				{videoList && videoList.length > 1 && (
					<ul className='video-index-button'>
						{videoList.map((video, index) => {
							return (
								<li
									className={
										currentVideoIndex === index ? 'on' : ''
									}
									onClick={clickVideoIndex}
									key={`videoIndex${index}`}
								>
									{index}
								</li>
							);
						})}
					</ul>
				)}
				{/* 아이콘 이미지가 안들어가요! ㅠㅠ */}
				<button className='ranking-btn' onClick={showRankingPopupOpen}>
					주간랭킹
				</button>
				{showRankingPopup && (
					<RankPopupStyle>
						<div className='inner'>
							<RankingPopup
								showRankingClosePopup={showRankingClosePopup}
							/>
						</div>
					</RankPopupStyle>
				)}
			</MainVideoWrap>
		</>
	);
};

export default MainVideo;
