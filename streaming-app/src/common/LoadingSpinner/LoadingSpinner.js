import React from 'react';
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner-container'>
      <div className='loading-spinner'></div>
      <div className='loading-msg'>로딩중</div>
    </div>
  );
};

export default LoadingSpinner;