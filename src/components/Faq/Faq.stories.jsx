import React from 'react';
import Faq from './Faq';

export default {
  title: 'RajKamal/Faq',
  component: Faq,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'code', // Always show a code block
      },
    },
  },
};

export const Default = {
  args: {
    question: 'What is Storybook?',
    answer: 'Storybook is a tool for building UI components in isolation.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Faq question="What is Storybook?" answer="Storybook is a tool for building UI components in isolation." />`,
      },
    },
  },
};
