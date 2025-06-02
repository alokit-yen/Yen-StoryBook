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
    { label: 'Option A', value: 'Option A' },
    { label: 'Option B', value: 'Option B' },
    { label: 'Option C', value: 'Option C' },
    { label: 'Option D', value: 'Option D' },
  ],
  onSelect: (option) => alert(`Selected: ${option.value}`),
};

Default.parameters = {
  docs: {
    source: {
      code: `
<Dropdown
  label="Select an option"
  options={[
    { label: 'Option A', value: 'Option A' },
    { label: 'Option B', value: 'Option B' },
    { label: 'Option C', value: 'Option C' },
    { label: 'Option D', value: 'Option D' },
  ]}
  onSelect={(option) => alert(\`Selected: \${option.value}\`)}
/>
      `.trim(),
    },
  },
};
