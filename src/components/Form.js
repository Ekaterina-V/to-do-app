import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/database/firebaseContext';

export const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addTask(value.trim())
        .then(() => {
          alert.show('New task has been added', 'success');
        })
        .catch(() => {
          alert.show('Error', 'danger');
        });
      setValue('');
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
