import React from "react";
import "./SearchBar.css";

/**
 * Customizable SearchBar component.
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'outline' | 'clearable'
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Controlled input value
 * @param {function} props.onChange - Change handler
 * @param {function} [props.onClear] - Optional clear handler (for clearable variant)
 */
const SearchBar = ({ variant = "primary", placeholder, value, onChange, onClear }) => {
  return (
    <div className={`searchbar searchbar-${variant}`}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {variant === "clearable" && value && (
        <button className="clear-btn" onClick={onClear}>
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;
