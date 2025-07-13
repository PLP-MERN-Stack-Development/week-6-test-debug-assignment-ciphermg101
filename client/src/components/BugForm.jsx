import React, { useState } from 'react';

const BugForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    setError('');
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} data-testid="bug-form">
      {error && <div data-testid="form-error">{error}</div>}
      <input
        data-testid="title-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Bug title"
      />
      <textarea
        data-testid="desc-input"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Report Bug</button>
    </form>
  );
};

export default BugForm; 