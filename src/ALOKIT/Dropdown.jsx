import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({
  label,
  options = [],
  onSelect,
  grouped = false,
  groups = {}, // For grouped dropdowns
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selected ? selected.label : label}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {grouped ? (
            // Grouped options
            Object.entries(groups).map(([groupName, groupOptions]) => (
              <div key={groupName} className="dropdown-group">
                <div className="dropdown-group-label">{groupName}</div>
                {groupOptions.map((opt) => (
                  <li
                    key={opt.value}
                    className="dropdown-item"
                    onClick={() => handleSelect(opt)}
                  >
                    {opt.icon && <span className="dropdown-icon">{opt.icon}</span>}
                    {opt.label}
                  </li>
                ))}
              </div>
            ))
          ) : (
            // Flat list options
            options.map((opt) => (
              <li
                key={opt.value}
                className="dropdown-item"
                onClick={() => handleSelect(opt)}
              >
                {opt.icon && <span className="dropdown-icon">{opt.icon}</span>}
                {opt.label}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
