// ProgressBar.stories.jsx
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './ProgressBar.css';

export default {
  title: 'shivam/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A simple and animated progress bar component that displays percentage progress visually and as text.',
      },
    },
  },
};

// 1. Default (Blue)
export const Default = () => (
  <div style={{ maxWidth: 400, margin: '2rem auto' }}>
    <ProgressBar progress={40} color="#3b82f6" />
  </div>
);
Default.storyName = 'Default';
Default.parameters = {
  docs: {
    description: {
      story: 'Static progress bar with 40% progress and blue color.',
    },
  },
};

// 2. Animated (Green)
export const Animated = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <ProgressBar progress={progress} color="#10b981" />
      <p>{progress}%</p>
    </div>
  );
};
Animated.storyName = 'Animated';
Animated.parameters = {
  docs: {
    description: {
      story: 'Automatically animated progress bar using green color.',
    },
  },
};

// 3. Move on Click (Amber)
export const MoveOnClick = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 20));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <ProgressBar progress={progress} color="#f59e0b" />
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
      story: 'Interactive progress bar with amber color.',
    },
  },
};
