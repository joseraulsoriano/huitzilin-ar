import React from 'react';
import '../styles/LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', text = 'Cargando...' }) => {
  return (
    <div className={`loading-spinner loading-spinner--${size}`}>
      <div className="spinner">
        <div className="spinner-inner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
      </div>
      <p className="loading-text">{text}</p>
    </div>
  );
};

export default LoadingSpinner;
