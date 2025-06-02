import Spinner from './Spinner';

export default {
  title: 'Hiten/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'dots', 'bars'],
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
  },
};

const Template = ({ type, size, color }) => (
  <Spinner type={type} size={size} color={color} />
);

export const Playground = Template.bind({});
Playground.args = {
  type: 'default',
  size: 40,
  color: '#4f46e5',
};