import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      //...add new task
      alert.show('New task has been added', 'success');
    } else {
      alert.show('Add new task');
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
