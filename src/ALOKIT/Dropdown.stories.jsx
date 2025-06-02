import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'ALOKIT/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '250px',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          overflow: 'visible',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Option A', value: 'Option-A' },
    { label: 'Option B', value: 'Option-B' },
    { label: 'Option C', value: 'Option-C' },
    { label: 'Option D', value: 'Option-D' },
  ],
  onSelect: (option) => alert(`Selected: ${option.value}`),
};
Default.parameters = {
  docs: {
    source: {
      code: `<Dropdown
  label="Select an option"
  options={[
    { label: 'Option A', value: 'Option-A' },
    { label: 'Option B', value: 'Option-B' },
    { label: 'Option C', value: 'Option-C' },
    { label: 'Option D', value: 'Option-D' },
  ]}
  onSelect={(option) => alert(\`Selected: \${option.value}\`)}
/>`,
    },
  },
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'Menu',
  options: [
    { label: '📄 Profile', value: 'profile' },
    { label: '⚙️ Settings', value: 'settings' },
    { label: '🔓 Logout', value: 'logout' },
  ],
  onSelect: (option) => alert(`Selected: ${option.value}`),
};
WithIcons.parameters = {
  docs: {
    source: {
      code: `<Dropdown
  label="Menu"
  options={[
    { label: '📄 Profile', value: 'profile' },
    { label: '⚙️ Settings', value: 'settings' },
    { label: '🔓 Logout', value: 'logout' },
  ]}
  onSelect={(option) => alert(\`Selected: \${option.value}\`)}
/>`,
    },
  },
};

export const Grouped = Template.bind({});
Grouped.args = {
  label: 'Choose item',
  grouped: true,
  groups: {
    Fruits: [
      { label: '🍎 Apple', value: 'apple' },
      { label: '🍌 Banana', value: 'banana' },
    ],
    Vegetables: [
      { label: '🥕 Carrot', value: 'carrot' },
      { label: '🥬 Spinach', value: 'spinach' },
    ],
  },
  onSelect: (option) => alert(`Selected: ${option.value}`),
};
Grouped.parameters = {
  docs: {
    source: {
      code: `<Dropdown
  label="Choose item"
  grouped
  groups={{
    Fruits: [
      { label: '🍎 Apple', value: 'apple' },
      { label: '🍌 Banana', value: 'banana' },
    ],
    Vegetables: [
      { label: '🥕 Carrot', value: 'carrot' },
      { label: '🥬 Spinach', value: 'spinach' },
    ],
  }}
  onSelect={(option) => alert(\`Selected: \${option.value}\`)}
/>`,
    },
  },
};
