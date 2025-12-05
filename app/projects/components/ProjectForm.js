import React, { useState } from "react";
import TechnologyInput from "./TechnologyInput";

export default function ProjectForm({ isOpen, onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const [projectUrl, setProjectUrl] = useState(initialData.projectUrl || "");
  const [githubUrl, setGithubUrl] = useState(initialData.githubUrl || "");
  const [technologies, setTechnologies] = useState(initialData.technologies || []);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (projectUrl && !isValidUrl(projectUrl)) newErrors.projectUrl = "Please enter a valid URL";
    if (githubUrl && !isValidUrl(githubUrl)) newErrors.githubUrl = "Please enter a valid URL";
    if (!technologies.length) newErrors.technologies = "At least one technology is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    await onSubmit({
      title,
      description,
      imageUrl: imageUrl || "",
      projectUrl: projectUrl || "",
      githubUrl: githubUrl || "",
      technologies,
    });

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        aria-label="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={errors.title ? "border-red-500" : ""}
      />
      {errors.title && <p>{errors.title}</p>}

      <input
        aria-label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={errors.description ? "border-red-500" : ""}
      />
      {errors.description && <p>{errors.description}</p>}

      <input
        aria-label="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <input
        aria-label="Project URL"
        value={projectUrl}
        onChange={(e) => setProjectUrl(e.target.value)}
      />
      {errors.projectUrl && <p>{errors.projectUrl}</p>}

      <input
        aria-label="GitHub URL"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
      />
      {errors.githubUrl && <p>{errors.githubUrl}</p>};</form>)
};
