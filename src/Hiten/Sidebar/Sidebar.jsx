import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ heading = 'My App', navItems = [], width = '220px', position = 'left' }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Split logout from other nav items
  const nonLogoutItems = navItems.filter(item => item.toLowerCase() !== 'logout');
  const hasLogout = navItems.some(item => item.toLowerCase() === 'logout');

  return (
    <div
      className="sidebar"
      style={{
        width,
        left: position === 'left' ? 0 : 'auto',
        right: position === 'right' ? 0 : 'auto',
      }}
    >
      <div className="sidebar-heading">{heading}</div>

      <div className="sidebar-nav">
        {nonLogoutItems.map((item, index) => (
          <button
            key={index}
            className="sidebar-btn"
            onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
          >
            {item}
          </button>
        ))}

        {hasLogout && (
          <button
            className="sidebar-btn logout-btn"
            onClick={() => handleNavigation('/logout')}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
