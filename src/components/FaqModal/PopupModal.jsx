import PropTypes from 'prop-types';
import { useState } from 'react';
import './FaqModal.css';

export default function PopupModal({
  onSubmit,
  title = 'Popup Modal',
  style = {},
  questionPlaceholder = 'Question',
  answerPlaceholder = 'Answer',
  showFAQ = false,
  showProfile = false,
  profileData = {},
}) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (showFAQ) {
      onSubmit({ question, answer });
      setQuestion('');
      setAnswer('');
    } else {
      onSubmit();
    }
  };

  return (
    <div className="modal-overlay" style={style}>
      <div className="modal">
        <h2>{title}</h2>

        {showFAQ && (
          <>
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
          </>
        )}

        {showProfile && (
          <div className="profile-modal">
            <img src={profileData.image} alt="Profile" className="profile-img" />
            <p><strong>Name:</strong> {profileData.name}</p>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Phone:</strong> {profileData.phone}</p>
            <p><strong>Address:</strong> {profileData.address}</p>
          </div>
        )}

        {!showFAQ && !showProfile && (
          <p style={{ textAlign: 'center', fontSize: '14px' }}>
            You can place anything here using children in future versions.
          </p>
        )}

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
  showFAQ: PropTypes.bool,
  showProfile: PropTypes.bool,
  profileData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }),
};
