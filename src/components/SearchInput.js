import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadVideo } from '../reducers/video';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchTerm}
          placeholder='운동 검색'
          onChange={handleInputChange}
        />
        <button type='submit'>검색</button>
      </form>
    </div>
  );
};

export default SearchInput;
