import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadVideo } from '../reducers/video';
// import { SearchStyle } from '../style/PopupStyle';

const SearchInput = () => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState('');

	const handleInputChange = e => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log('searchTerm :', searchTerm);
		dispatch(loadVideo(searchTerm));
	};

	return (
		<div className='search-input'>
			{/* <SearchStyle> */}
			<h3>오늘 할 운동을 검색하세요</h3>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={searchTerm}
					placeholder='운동 검색'
					onChange={handleInputChange}
				/>
				<button type='submit'>검색</button>
			</form>
			{/* </SearchStyle> */}
		</div>
	);
};

export default SearchInput;
