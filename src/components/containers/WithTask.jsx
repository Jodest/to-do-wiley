import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { fetchTasks, addTask, deleteTask, doneTask, editTask, setReverseOrder } from '../../store/tasks';
import TasksService from '../../services/TasksService';

const WithTasks = (Wrapped) => (props) => {
  return (
    <Wrapped {...props} />
  );
};

const mapStateToProps = ({ updateTasksList: { tasks, sortOrder, error, loading }}) => ({
  tasks: sortOrder.map(el => tasks[el]),
  error,
  loading,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchTasks: fetchTasks(new TasksService()),
    addTask: addTask(new TasksService()),
    deleteTask: deleteTask(new TasksService()),
    doneTask: doneTask(new TasksService()),
    editTask: editTask(new TasksService()),
    setReverseOrder,
  }, dispatch);
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithTasks
);