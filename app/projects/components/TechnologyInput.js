import React, { useState } from "react";

export default function TechnologyInput({ technologies, setTechnologies, onChange }) {
  const [input, setInput] = useState("");

  const addTech = (tech) => {
    if (!tech) return;
    if (!technologies.includes(tech)) {
      const updated = [...technologies, tech];
      setTechnologies(updated);
      if (onChange) onChange(updated);
    }
    setInput("");
  };

  const removeTech = (tech) => {
    const updated = technologies.filter((t) => t !== tech);
    setTechnologies(updated);
    if (onChange) onChange(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTech(input.trim());
    }
  };

  return (
    <div>
      <input
        placeholder="Type a technology"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={() => addTech(input.trim())}>
        Add
      </button>

      <div>
        {["JavaScript", "React", "Next.js"].map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => addTech(tech)}
            disabled={technologies.includes(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div>
        {technologies.map((tech) => (
          <span key={tech}>
            {tech}{" "}
            <button aria-label="Remove" onClick={() => removeTech(tech)}>
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
