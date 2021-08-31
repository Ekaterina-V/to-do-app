import React, { useReducer } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import axios from 'axios';
import { SHOW_LOADER, REMOVE_TASK } from '../types';

const url = process.env.TO_DO_APP_UR;

export const FirebaseState = ({ children }) => {
  const initialState = {
    tasks: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchTasks = async () => {
    showLoader();
    const res = await axios.get(`${url}/tasks.json`);
    console.log('fetchTasks', res.data);
  };

  const addTask = async title => {
    const task = { title, date: new Date().toJSON };
    const res = await axios.post(`${url}/tasks.json`, task);
    console.log('addTask', res.data);
  };

  const removeTask = async id => {
    await axios.delete(`${url}/tasks/${id}.json`);
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        addTask,
        removeTask,
        fetchTasks,
        loading: state.loading,
        tasks: state.tasks,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
