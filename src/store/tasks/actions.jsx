import uuid from "uuid";

import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  POST_TASKS_REQUEST,
  POST_TASKS_SUCCESS,
  POST_TASKS_FAILURE,
  TOOGLE_REVERSE_ORDER,
} from '../constants';

const fetchTasksRequested = () => {
  return {
    type: FETCH_TASKS_REQUEST
  };
};

const fethcTasksLoaded = (newTasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: newTasks
  };
};

const fetchTasksError = (error) => {
  return {
    type: FETCH_TASKS_FAILURE,
    payload: error
  };
};

const postTasksRequested = () => {
  return {
    type: POST_TASKS_REQUEST
  };
};

const postTasksLoaded = ({ data, message }) => {
  return {
    type: POST_TASKS_SUCCESS,
    payload: data
  };
};

const postTasksError = (error) => {
  return {
    type: POST_TASKS_FAILURE,
    payload: error
  };
};

export const fetchTasks = (tasksService) => () => (dispatch) => {
  dispatch(fetchTasksRequested());
  return tasksService.getTasks()
    .then((data) => dispatch(fethcTasksLoaded(data)))
    .catch((err) => dispatch(fetchTasksError(err)));
};

export const addTask = (tasksService) => (text) => (dispatch, getState) => {
  dispatch(postTasksRequested());
  const tasks = getState().updateTasksList.originOrder.map(el => getState().updateTasksList.tasks[el]);
  return tasksService.postTasks([
    ...tasks,
    {
      id: uuid.v4(),
      title: text,
      done: false,
    }
  ])
    .then((data) => {
      dispatch(postTasksLoaded(data));
      return true;
    })
    .catch((err) => {
      dispatch(postTasksError(err));
      return false;
    });
};

export const deleteTask = (tasksService) => (ind) => (dispatch, getState) => {
  dispatch(postTasksRequested());
  const tasks = getState().updateTasksList.originOrder.map(el => getState().updateTasksList.tasks[el]);
  const newTasks = tasks.filter((el) => el.id !== ind);
  return postTasks(dispatch, tasksService, newTasks);
};

export const editTask = (tasksService) => (ind, text) => (dispatch, getState) => {
  dispatch(postTasksRequested());
  const tasks = getState().updateTasksList.originOrder.map(el => getState().updateTasksList.tasks[el]);
  const newTasks = tasks.map((el) => ({...el, title: el.id === ind ? text : el.title}));
  return postTasks(dispatch, tasksService, newTasks);
};

export const doneTask = (tasksService) => (tasks, ind) => (dispatch, getState) => {
  dispatch(postTasksRequested());
  const tasks = getState().updateTasksList.originOrder.map(el => getState().updateTasksList.tasks[el]);
  const newTasks = tasks.map((el) => ({...el, done: el.id === ind ? true : el.done}))
  return postTasks(dispatch, tasksService, newTasks);
};

export const setReverseOrder = () => {
  return {
    type: TOOGLE_REVERSE_ORDER,
  };
};

const postTasks = (dispatch, service, tasks) => service.postTasks(tasks)
  .then((data) => dispatch(postTasksLoaded(data)))
  .catch((err) => dispatch(postTasksError(err)));
