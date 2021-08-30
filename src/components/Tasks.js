import React from 'react';

export const Tasks = ({ tasks }) => {
  return (
    <ul class="list-group">
      {tasks.map(task => (
        <li class="list-group-item" key={task.id}>
          {task.title}
        </li>
      ))}
    </ul>
  );
};
