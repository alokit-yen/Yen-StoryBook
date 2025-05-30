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
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    onSubmit: (data) => alert(`Submitted: ${JSON.stringify(data)}`),
  },
};
