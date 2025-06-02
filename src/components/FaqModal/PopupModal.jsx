import PropTypes from 'prop-types';
import { useState } from 'react';
import './FaqModal.css';

export default function PopupModal({
  onSubmit,
  title = 'Add FAQ',
  style = {},
  questionPlaceholder = 'Question',
  answerPlaceholder = 'Answer',
}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit({ question, answer });
    setQuestion('');
    setAnswer('');
  };

  return (
    <div className="modal-overlay" style={style}>
      <div className="modal">
        <h2>{title}</h2>
        <input
          type="text"
          placeholder={questionPlaceholder}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <textarea
          placeholder={answerPlaceholder}
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
  title: PropTypes.string,
  style: PropTypes.object,
  questionPlaceholder: PropTypes.string,
  answerPlaceholder: PropTypes.string,
};
