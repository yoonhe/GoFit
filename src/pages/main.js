import React from 'react';
import MainVideo from '../components/MainVideo';
import MainCalendar from '../components/Calendar';

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
      <MainCalendar />
    </div>
  );
};

export default Main;
