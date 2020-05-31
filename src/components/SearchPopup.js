import React from 'react';
import SearchInput from './SearchInput';
import ResultVideos from './ResultVideos';
import { TitleStyle } from '../style/PopupStyle';

const SearchPopup = () => {
	return (
		<div>
			<TitleStyle>
				<h4>오늘 할 운동을 검색하세요!</h4>
			</TitleStyle>

			<SearchInput />
			<ResultVideos />
		</div>
	);
};

export default SearchPopup;
