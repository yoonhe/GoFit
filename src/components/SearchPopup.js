import React from 'react';
import SearchInput from './SearchInput';
import ResultVideos from './ResultVideos';
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

const SearchPopup = () => {
  //   const [isOpen, showModal] = useState(false);
  return (
    <div>
      <h3>SearchPopup</h3>
      <SearchInput />
      <ResultVideos />
    </div>
  );
};

export default SearchPopup;
