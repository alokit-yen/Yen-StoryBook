import React, { useState } from 'react';
import Input from './Input';

export default {
  title: 'ALOKIT/Input',
  component: Input,
  tags: ['autodocs'], 
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  placeholder: 'Enter your username',
};
Default.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Username"
  placeholder="Enter your username"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
      `.trim(),
    },
  },
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  label: 'Email',
  placeholder: 'Enter your email',
  value: 'user@example.com',
};
WithInitialValue.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Email"
  placeholder="Enter your email"
  value="user@example.com"
  onChange={(e) => setValue(e.target.value)}
/>
      `.trim(),
    },
  },
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
};
PasswordInput.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
      `.trim(),
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Field',
  placeholder: 'Cannot type here',
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: `
<Input
  label="Disabled Field"
  placeholder="Cannot type here"
  disabled
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
      `.trim(),
    },
  },
};
