import React from 'react';
import MainVideo from '../components/MainVideo';

const Main = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1200px',
      }}
    >
      <MainVideo />
      <div style={{ width: '60%' }}>캘린더 영역</div>
    </div>
  );
};

export default Main;
