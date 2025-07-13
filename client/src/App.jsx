import React, { useEffect, useState } from 'react';
import { fetchBugs, createBug, updateBug, deleteBug } from './api/bugs';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState('');

  const loadBugs = async () => {
    try {
      const { data } = await fetchBugs();
      setBugs(data);
    } catch (err) {
      setError('Failed to load bugs');
    }
  };

  useEffect(() => {
    loadBugs();
  }, []);

  const handleCreate = async (bug) => {
    try {
      await createBug(bug);
      loadBugs();
    } catch {
      setError('Failed to create bug');
    }
  };

  const handleUpdate = async (id, updates) => {
    try {
      await updateBug(id, updates);
      loadBugs();
    } catch {
      setError('Failed to update bug');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBug(id);
      loadBugs();
    } catch {
      setError('Failed to delete bug');
    }
  };

  return (
    <ErrorBoundary>
      <h1>Bug Tracker</h1>
      {error && <div>{error}</div>}
      <BugForm onSubmit={handleCreate} />
      <BugList bugs={bugs} onUpdate={handleUpdate} onDelete={handleDelete} />
    </ErrorBoundary>
  );
};

export default App; 