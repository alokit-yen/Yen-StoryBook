import React from "react";
import "./Button.css";

/**
 * Customizable Button component.
 * @param {Object} props
 * @param {string} props.variant - Button type: 'primary' | 'outline' | 'danger'
 * @param {React.ReactNode} props.children - Button text/content
 * @param {function} props.onClick - Click handler
 * @param {React.CSSProperties} [props.style] - Inline style object
 */
const Button = ({ variant = "primary", children, onClick, style }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
