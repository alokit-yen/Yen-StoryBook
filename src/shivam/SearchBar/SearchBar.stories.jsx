import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

export default {
  title: "shivam/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A reusable SearchBar component with support for three variants: Primary, Outline, and Clearable.",
      },
    },
  },
};

// 1. Primary SearchBar
export const Primary = () => {
  const [value, setValue] = useState("");
  return (
    <SearchBar
      variant="primary"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
Primary.storyName = "Primary";
Primary.parameters = {
  docs: {
    description: {
      story: "Primary SearchBar with blue border and light background.",
    },
  },
};

// 2. Outline SearchBar
export const Outline = () => {
  const [value, setValue] = useState("");
  return (
    <SearchBar
      variant="outline"
      placeholder="Search something..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
Outline.storyName = "Outline";
Outline.parameters = {
  docs: {
    description: {
      story: "Outline SearchBar with gray border for a cleaner look.",
    },
  },
};

// 3. Clearable SearchBar
export const Clearable = () => {
  const [value, setValue] = useState("");
  return (
    <SearchBar
      variant="clearable"
      placeholder="Type and clear..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
    />
  );
};
Clearable.storyName = "With Clear Button";
Clearable.parameters = {
  docs: {
    description: {
      story: "This variant includes a clear button (×) to reset the input quickly.",
    },
  },
};
