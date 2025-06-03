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

            <div className="modal-field">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={profileData.name}
                readOnly
              />
            </div>

            <div className="modal-field">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={profileData.email}
                readOnly
              />
            </div>

            <div className="modal-field">
              <label htmlFor="phone">Phone:</label>
              <input
                id="phone"
                type="tel"
                value={profileData.phone}
                readOnly
              />
            </div>

            <div className="modal-field">
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                value={profileData.address}
                readOnly
              />
            </div>
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
