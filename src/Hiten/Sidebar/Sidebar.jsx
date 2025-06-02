import React from 'react';
import './Sidebar.css';

const Sidebar = ({ items = [], onItemClick }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">MyApp</div>
      <ul className="sidebar-list">
        {items.map((item, index) => (
          <li
            key={index}
            className="sidebar-item"
            onClick={() => onItemClick?.(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

