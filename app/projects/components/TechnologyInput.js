import React, { useState } from 'react';

const TechnologyInput = ({ value = [], onChange }) => {
  const [technologies, setTechnologies] = useState(value);
  const [input, setInput] = useState('');

  const addTech = (tech) => {
    if (!tech) return;
    if (!technologies.includes(tech)) {
      const updated = [...technologies, tech];
      setTechnologies(updated);
      if (onChange) onChange(updated);
    }
    setInput('');
  };

  const removeTech = (tech) => {
    const updated = technologies.filter((t) => t !== tech);
    setTechnologies(updated);
    if (onChange) onChange(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTech(input.trim());
    }
  };

  const predefined = ['JavaScript', 'React', 'Next.js'];

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
        {predefined.map((tech) => (
          <button
            key={tech}
            type="button"
            disabled={technologies.includes(tech)}
            onClick={() => addTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      <div>
        {technologies.map((tech) => (
          <span key={tech}>
            {tech}
            <button
              type="button"
              aria-label="Remove"
              onClick={() => removeTech(tech)}
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologyInput;
