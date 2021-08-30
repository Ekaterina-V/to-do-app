import React from 'react';

export const Tasks = ({ tasks }) => {
  return (
    <ul class="list-group">
      {tasks.map(task => (
        <li className="list-group-item task" key={task.id}>
          {task.title}
          <button type="button" class="btn btn-outline-warning btn-sm">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
