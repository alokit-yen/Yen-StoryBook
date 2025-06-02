import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({
  width = 240,
  background = '#1f2937',
  position = 'left',
  navItems = [
    { label: 'Home' },
    { label: 'Profile' },
    { label: 'Settings' },
    { label: 'Logout' },
  ],
}) => {
  const navigate = useNavigate();

  const style = {
    width,
    backgroundColor: background,
    [position]: 0,
  };

  const handleClick = (label) => {
    // Lowercase and remove spaces for path
    let path = '/' + label.toLowerCase().replace(/\s+/g, '');

    if (label.toLowerCase() === 'logout') {
      // Handle logout differently if needed
      // For demo, redirect to '/'
      path = '/';
      // You could also clear auth here
    }

    navigate(path);
  };

  return (
    <aside className="sidebar" style={style}>
      <h2 className="sidebar-heading">My App</h2>
      <nav className="sidebar-nav">
        {navItems.map(({ label }, index) => (
          <button
            key={index}
            className={`sidebar-btn ${label.toLowerCase() === 'logout' ? 'logout-btn' : ''}`}
            onClick={() => handleClick(label)}
          >
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;


