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
};

export const Default = {
  args: {
    onSubmit: (data) => alert(`Submitted: ${JSON.stringify(data)}`),
  },
};
