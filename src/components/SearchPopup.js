import React from 'react';
import SearchInput from './SearchInput';
import ResultVideos from './ResultVideos';

const SearchPopup = () => {
	return (
		<div>
			<h6>오늘 할 운동을 검색하세요</h6>
			<SearchInput />
			<ResultVideos />
		</div>
	);
};

export default SearchPopup;
