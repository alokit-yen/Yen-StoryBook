import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 48, color = '#6366f1' }) => {
  const style = {
    width: size,
    height: size,
    borderLeftColor: color,
  };

  return (
    <div className="spinner-wrapper">
      <div className="spinner" style={style}></div>
    </div>
  );
};

export default Spinner;

