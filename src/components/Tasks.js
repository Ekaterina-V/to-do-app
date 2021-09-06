import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Tasks = ({ tasks, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">
    {tasks.map(task => (
      <CSSTransition key={task.id} classNames={'task'} timeout={1000}>
        <li className="list-group-item task">
          <div>
            <strong>{task.title}</strong>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            onClick={() => onRemove(task.id)}
          >
            Delete
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);
