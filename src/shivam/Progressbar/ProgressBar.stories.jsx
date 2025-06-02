import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // default import
import './ProgressBar.css';

export default {
  title: 'shivam/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple and animated progress bar component that displays percentage progress visually and as text.',
      },
    },
  },
};

// 1. Default
export const Default = () => (
  <div style={{ maxWidth: 400, margin: '2rem auto' }}>
    <ProgressBar progress={40} />
  </div>
);
Default.storyName = 'Default';
Default.parameters = {
  docs: {
    description: {
      story: 'Static progress bar with 40% progress. No interactivity or animation logic from Storybook.',
    },
  },
};

// 2. Animated (handled via CSS transitions)
export const Animated = () => (
  <div style={{ maxWidth: 400, margin: '2rem auto' }}>
    <ProgressBar progress={75} />
  </div>
);
Animated.storyName = 'Animated';
Animated.parameters = {
  docs: {
    description: {
      story: 'Visually animated progress bar. The animation is handled entirely through CSS in `ProgressBar.css`.',
    },
  },
};

// 3. Move on Click
export const MoveOnClick = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 20));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <ProgressBar progress={progress} />
      <button
        onClick={handleClick}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Increase Progress
      </button>
    </div>
  );
};
MoveOnClick.storyName = 'Move on Click';
MoveOnClick.parameters = {
  docs: {
    description: {
      story:
        'This interactive version updates the progress value by 20% on each click. Resets to 0% when it reaches 100%.',
    },
  },
};
