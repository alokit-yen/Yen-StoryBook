import PropTypes from 'prop-types';
import { useState } from 'react';
import './FaqModal.css';

export default function PopupModal({ onSubmit }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add FAQ</h2>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
