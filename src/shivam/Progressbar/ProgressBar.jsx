// ProgressBar.jsx
import React from "react";
import "./ProgressBar.css";

/**
 * Animated ProgressBar component.
 * @param {Object} props
 * @param {number} props.progress - Progress value (0-100)
 * @param {string} [props.color] - Optional background color for progress bar
 */
const ProgressBar = ({ progress = 0, color }) => {
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress}%`,
          background: color || undefined,
          position: "relative",
        }}
      >
        <span
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.85rem",
            textShadow: "0 1px 4px rgba(0,0,0,0.18)",
            letterSpacing: "0.5px",
            transition: "right 0.4s cubic-bezier(0.4,0,0.2,1)",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {progress > 5 ? `${progress}%` : ""}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
