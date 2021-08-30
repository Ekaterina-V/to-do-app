import React, { Fragment } from 'react';
import { Form } from '../components/Form';
import { Tasks } from '../components/Tasks';

export const Home = () => {
  const tasks = new Array(5)
    .fill('')
    .map((_, i) => ({ id: i, title: `Task${i + 1}` }));
  return (
    <Fragment>
      <h1>Home page</h1>
      <Form />
      <hr />
      <Tasks tasks={tasks} />
    </Fragment>
  );
};
