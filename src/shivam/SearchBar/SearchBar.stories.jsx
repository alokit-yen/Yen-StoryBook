import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./SearchBar.css";
import { Search } from "lucide-react";

export default {
  title: "shivam/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable SearchBar component supporting multiple styles including Primary, Outline, Clearable, Rounded with Icon, Focused highlight, and Custom colors/placeholders.",
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
      story: "Clearable variant includes a × button to reset the input field.",
    },
  },
};

// 4. Rounded with Search Icon
export const RoundedWithIcon = () => {
  const [value, setValue] = useState("");
  return (
    <div className="searchbar searchbar-rounded">
      <span className="search-icon"><Search size={20} /></span>
      <input
        className="search-input"
        placeholder="Search anything..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
RoundedWithIcon.storyName = "Rounded with Icon";
RoundedWithIcon.parameters = {
  docs: {
    description: {
      story: "Rounded input with a left-aligned search icon inside the input box.",
    },
  },
};


