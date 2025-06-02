// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ title, content, footer, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && (
        <div className="card-image-wrapper">
          <img src={imageUrl} alt={title || 'Card image'} className="card-image" />
        </div>
      )}
      {title && <div className="card-header">{title}</div>}
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
