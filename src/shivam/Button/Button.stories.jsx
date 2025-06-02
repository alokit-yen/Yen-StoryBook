import React from 'react';
import Button from './Button';
import './Button.css';

export default {
  title: 'shivam/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A reusable and styled Button component with three variants: Primary, Outline, and Danger.',
      },
    },
  },
};

// 1. Primary Button
export const Primary = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button variant="primary" onClick={() => alert('Primary button clicked!')}>
      Primary Button
    </Button>
  </div>
);
Primary.storyName = 'Primary';
Primary.parameters = {
  docs: {
    description: {
      story: 'The Primary button has a solid blue background and white text. Best for main actions.',
    },
  },
};

// 2. Outline Button
export const Outline = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button variant="outline" onClick={() => alert('Outline button clicked!')}>
      Outline Button
    </Button>
  </div>
);
Outline.storyName = 'Outline';
Outline.parameters = {
  docs: {
    description: {
      story: 'The Outline button is transparent with a blue border and text. Good for secondary actions.',
    },
  },
};

// 3. Danger Button
export const Danger = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button variant="danger" onClick={() => alert('Danger button clicked!')}>
      Danger Button
    </Button>
  </div>
);
Danger.storyName = 'Danger';
Danger.parameters = {
  docs: {
    description: {
      story: 'The Danger button is red and should be used for destructive actions like Delete.',
    },
  },
};
