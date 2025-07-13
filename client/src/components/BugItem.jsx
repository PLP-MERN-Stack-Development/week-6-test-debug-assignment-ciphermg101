import React from 'react';

const BugItem = ({ bug, onUpdate, onDelete }) => (
  <li>
    <strong>{bug.title}</strong> - {bug.status}
    <button onClick={() => onUpdate(bug._id, { status: 'in-progress' })}>In Progress</button>
    <button onClick={() => onUpdate(bug._id, { status: 'resolved' })}>Resolve</button>
    <button onClick={() => onDelete(bug._id)}>Delete</button>
  </li>
);

export default BugItem; 