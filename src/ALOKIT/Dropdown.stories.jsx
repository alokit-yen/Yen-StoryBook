import React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'ALOKIT/Dropdown',
  component: Dropdown,
  tags: ['autodocs'], 
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: [
    { label: 'Intern-1', value: 'ALOKIT' },
    { label: 'Intern-2', value: 'HITEN' },
    { label: 'Intern-3', value: 'RAJKAMAL' },
    { label: 'Intern-4', value: 'SHIVAM' },
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
    { label: 'Intern-1', value: 'ALOKIT' },
    { label: 'Intern-2', value: 'HITEN' },
    { label: 'Intern-3', value: 'RAJKAMAL' },
    { label: 'Intern-4', value: 'SHIVAM' },
  ]}
  onSelect={(option) => alert(\`Selected: \${option.value}\`)}
/>
      `.trim(),
    },
  },
};