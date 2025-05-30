// Card.jsx
import React from 'react';
import './Card.css'; // Optional CSS or use Tailwind

const Card = ({ title, content, footer }) => {
  return (
    <div className="card">
      {title && <div className="card-header">{title}</div>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
