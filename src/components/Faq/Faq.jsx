import PropTypes from 'prop-types';
import { useState } from 'react';
import './Faq.css';

export default function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq">
      <div className="faq-header">
        <h3>{question}</h3>
        <button
          className="faq-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Answer"
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
