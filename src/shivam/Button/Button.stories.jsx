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
      Primary
    </Button>
  </div>
);
Primary.storyName = 'Primary';

// 2. Outline Button
export const Outline = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button variant="outline" onClick={() => alert('Outline button clicked!')}>
      Outline
    </Button>
  </div>
);
Outline.storyName = 'Outline';

// 3. Danger Button
export const Danger = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button variant="danger" onClick={() => alert('Danger button clicked!')}>
      Log-Out
    </Button>
  </div>
);
Danger.storyName = 'Danger';

// 4. Green Round Button (Pill-shaped, Green)
export const GreenRound = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Button
      onClick={() => alert('Green Round button clicked!')}
      style={{
        backgroundColor: '#10b981', // green background
        color: '#fff',
        borderRadius: '9999px',      // pill shape
        padding: '0.5rem 1.5rem',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
      }}
    >
      Round Green 
    </Button>
  </div>
);
GreenRound.storyName = 'Green Round';
GreenRound.parameters = {
  docs: {
    description: {
      story: 'A pill-shaped button with a green background.',
    },
  },
};