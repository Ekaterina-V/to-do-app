import React, { Fragment, useContext, useEffect } from 'react';
import { Form } from '../components/Form';
import { Tasks } from '../components/Tasks';
import { FirebaseContext } from '../context/database/firebaseContext';
import { Loader } from '../components/Loader';

export const Home = () => {
  const { loading, tasks, fetchTasks, removeTask } =
    useContext(FirebaseContext);
  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h1>Home page</h1>
      <Form />
      <hr />
      {loading ? <Loader /> : <Tasks tasks={tasks} onRemove={removeTask} />}
    </Fragment>
  );
};
