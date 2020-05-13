import React from 'react';
import MainVideo from '../components/MainVideo';

const Main = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <MainVideo />
      <div style={{ width: '100%' }}>캘린더 영역</div>
    </div>
  );
};

export default Main;
