// Card.stories.jsx
import React from 'react';
import Card from './Card';

export default {
  title: 'ALOKIT/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'Optional image URL to display at the top of the card',
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the main content of the card.',
  footer: 'Footer text',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Card with Image',
  content: 'This card includes an image at the top.',
  footer: 'Footer text',
  imageUrl: 'https://picsum.photos/400/200',
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  title: 'No Footer Card',
  content: 'Only content and header.',
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
  content: 'Just the content.',
};
