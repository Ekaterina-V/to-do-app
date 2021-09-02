import React, { useReducer } from 'react';
import axios from 'axios';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { ADD_TASK, FETCH_TASK, REMOVE_TASK, SHOW_LOADER } from '../types';

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

    const payload = Object.keys(res.data).map(key => {
      return {
        ...res.data[key],
        id: key,
      };
    });

    dispatch({ type: FETCH_TASK, payload });
  };

  const addTask = async title => {
    const task = {
      title,
      date: new Date().toJSON(),
    };

    try {
      const res = await axios.post(`${url}/tasks.json`, task);
      console.log('addTask', res.data);
      const payload = {
        ...task,
        id: res.data.name,
      };

      dispatch({ type: ADD_TASK, payload });
    } catch (e) {
      throw new Error(e.message);
    }
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
