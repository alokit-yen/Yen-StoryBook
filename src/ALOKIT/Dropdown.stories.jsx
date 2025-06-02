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
    { label: 'Option A', value: 'option-A' },
    { label: 'Option B', value: 'option-B' },
    { label: 'Option C', value: 'option-C' },
    { label: 'Option D', value: 'option-D' },
  ],
  onSelect: (option) => alert(`Selected: ${option.value}`),
};
Default.parameters = {
  docs: {
    source: {
      code: `<Dropdown
  label="Select an option"
  options={[
    { label: 'Intern-1', value: 'ALOKIT' },
    { label: 'Intern-2', value: 'HITEN' },
    { label: 'Intern-3', value: 'RAJKAMAL' },
    { label: 'Intern-4', value: 'SHIVAM' },
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
