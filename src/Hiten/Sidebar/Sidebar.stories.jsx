import React from 'react';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Hiten/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <div style={{height: "600px"}}>
          <Story />
        </div>

      </MemoryRouter>
    ),
  ],
  argTypes: {
    width: {
      control: { type: 'number', min: 100, max: 600, step: 10 },
      description: 'Width of the sidebar in pixels',
    },
    background: {
      control: 'color',
      description: 'Background color of the sidebar',
      table: { disable: true },
    },
    position: {
      control: { type: 'radio' },
      options: ['left', 'right'],
      description: 'Sidebar position on the screen',
    },
    navItems: {
      control: false,
      description: 'Array of navigation items with labels',
    },
  },
};

const navItemsExample = [
  { label: 'Home' },
  { label: 'Profile' },
  { label: 'Settings' },
  { label: 'Logout' },
];

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 280,
  position: 'left',
  navItems: navItemsExample,
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Sidebar
  width={280}
  position="left"
  navItems={[
    { label: 'Home' },
    { label: 'Profile' },
    { label: 'Settings' },
    { label: 'Logout' },
  ]}
/>
      `.trim(),
      language: 'jsx',
    },
  },
};
