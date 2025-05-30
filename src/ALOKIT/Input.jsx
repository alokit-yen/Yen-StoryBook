import React from 'react';
import './Input.css';

const Input = ({ label, value, placeholder, onChange, type = 'text', disabled = false }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        className="input-field"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
