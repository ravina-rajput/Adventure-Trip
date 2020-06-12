import React from 'react';
import loading from '../images/gif/loading-arrow.gif';

export const Loading = () => {
  return (
    <div className="loading">
      <h4>Trips are loading..</h4>
      <img src={loading} alt="loading" />
    </div>
  );
};
