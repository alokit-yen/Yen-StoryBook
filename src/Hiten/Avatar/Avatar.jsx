import React from 'react';
import './Avatar.css';

const Avatar = ({ type = 'image', src, initials = '', icon = '👤', size = 48 }) => {
  const styles = {
    width: size,
    height: size,
    fontSize: size / 2,
  };

  const renderContent = () => {
    switch (type) {
      case 'image':
        return <img src={src} alt="avatar" className="avatar-img" style={styles} />;
      case 'initials':
        return <div className="avatar-initials" style={styles}>{initials}</div>;
      case 'icon':
        return <div className="avatar-icon" style={styles}>{icon}</div>;
      default:
        return null;
    }
  };

  return <div className="avatar">{renderContent()}</div>;
};

export default Avatar;
