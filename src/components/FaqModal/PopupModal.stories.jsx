import PopupModal from './PopupModal';

export default {
  title: 'RajKamal/PopupModal',
  component: PopupModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
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

export const Default = {
  args: {
    title: 'Create a New FAQ',
    style: {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
    questionPlaceholder: 'Enter your FAQ question',
    answerPlaceholder: 'Provide a helpful answer',
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
  onSubmit={(data) => console.log(data)}
/>`,
      },
    },
  },
};
