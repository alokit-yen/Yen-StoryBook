import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Hiten/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'number', min: 10, max: 200, step: 1 },
      description: 'The width and height of the spinner in pixels',
    },
    color: {
      control: { type: 'color' },
      description: 'The spinner’s rotating arc color',
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `<Spinner size={48} color="#6366f1" />`,
      language: 'jsx',
    },
  },
};


