import React from 'react';
import Sidebar from './Sidebar';

export default {
  title: 'Hiten/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'Profile', 'Settings', 'Logout'],
  onItemClick: (item) => alert(`Clicked on: ${item}`),
};
