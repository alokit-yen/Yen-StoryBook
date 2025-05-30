// Card.stories.jsx
import React from 'react';
import Card from './Card'; 

export default {
  title: 'ALOKIT/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the main content of the card.',
  footer: 'Footer text',
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
