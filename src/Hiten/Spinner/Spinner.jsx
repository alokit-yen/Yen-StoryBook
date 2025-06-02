import React from 'react';
import './Spinner.css';

const Spinner = ({ size = 40, color = '#4f46e5', type = 'default' }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    color: color,
  };

  if (type === 'dots') {
    return (
      <div className="spinner-dots" style={style}>
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
        <span style={{ backgroundColor: color }} />
      </div>
    );
  }

  if (type === 'bars') {
    return (
      <div className="spinner-bars" style={style}>
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
      </div>
    );
  }

  // Default circular spinner
  return (
    <div
      className="spinner-default"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: `4px solid ${color}`,
        borderTop: `4px solid transparent`,
      }}
    />
  );
};

export default Spinner;
