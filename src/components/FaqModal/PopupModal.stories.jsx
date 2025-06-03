import PopupModal from './PopupModal';

export default {
  title: 'RajKamal/PopupModal',
  component: PopupModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          minWidth: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const GeneralPurpose = {
  args: {
    title: 'General Purpose Modal',
    style: { backgroundColor: 'rgba(0,0,0,0.2)' },
    onSubmit: () => alert('General modal submitted.'),
  },
  parameters: {
    docs: {
      source: {
        code: `<PopupModal
  title="General Purpose Modal"
  style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
  onSubmit={() => alert('General modal submitted.')}
/>`,
      },
    },
  },
};

export const FAQModal = {
  args: {
    title: 'Create a New FAQ',
    style: { backgroundColor: 'rgba(0,0,0,0.2)' },
    questionPlaceholder: 'Enter your FAQ question',
    answerPlaceholder: 'Provide a helpful answer',
    showFAQ: true,
    onSubmit: (data) =>
      alert(`Submitted:\nQuestion: ${data.question}\nAnswer: ${data.answer}`),
  },
  parameters: {
    docs: {
      source: {
        code: `<PopupModal
  title="Create a New FAQ"
  style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
  questionPlaceholder="Enter your FAQ question"
  answerPlaceholder="Provide a helpful answer"
  showFAQ={true}
  onSubmit={(data) => console.log(data)}
/>`,
      },
    },
  },
};


export const ProfileModal = {
  args: {
    title: 'Profile Details',
    style: { backgroundColor: 'rgba(0,0,0,0.3)' },
    showProfile: true,
    profileData: {
      image: 'https://via.placeholder.com/100',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1-234-567-890',
      address: '123, React Street, JS City, Webland',
    },
    onSubmit: () => alert('Profile modal closed.'),
  },
  parameters: {
    docs: {
      source: {
        code: `<PopupModal
           title="Profile Details"
  style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
  showProfile={true}
  profileData={{
    image: 'https://via.placeholder.com/100',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1-234-567-890',
    address: '123, React Street, JS City, Webland',
  }}
  onSubmit={() => alert('Profile modal closed.')}
/>`,
      },
    },
  },
};
