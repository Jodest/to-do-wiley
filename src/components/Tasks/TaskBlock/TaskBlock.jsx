import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { WithLoading, WithError, WithTasks} from '../../containers';
import TaskList from '../TaskList';
import TaskAddForm from '../TaskAddForm';
import Button from '../../Button';

import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = () => ({
  header: {
    backgroundColor: grey[300],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    fontSize: 30
  },
  search: {
    width: 500
  },
  taskBlock: {
    width: '50%',
    margin: '0 auto',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

class TaskBlock extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  };

  addItem = (text) => this.props.addTask(text);

  deleteItem = (ind) => this.props.deleteTask(ind);

  doneItem = (ind) => this.props.doneTask(ind,);

  editItem = (ind, text) => this.props.editTask(ind, text);

  setReverseOrder = () => this.props.setReverseOrder();

  render() {
    const { classes, tasks, error, loading } = this.props;

    return (
      <div className={classes.taskBlock}>
        <AppBar
          className={classes.header}
          position="relative"
          color="secondary"
        >
          <TaskAddForm
            onTaskAdded={this.addItem}
            disabled={loading || (tasks.length === 0 && error) ? true : false}
          />
          <Button
            onClick={this.setReverseOrder}
            type={'submit'}
            title={'Reverse'}
            disabled={loading || tasks.length === 1 || (tasks.length === 0 && error) ? true : false}
          />
        </AppBar>

        <WithLoading loading={loading}>
          <WithError error={error}>
          <TaskList
            list={tasks}
            doneItem={this.doneItem}
            deleteItem={this.deleteItem}
            editItem={this.editItem}
          />
          {/* {error ? <WithError error={error} /> : null} */}
          </WithError>
        </WithLoading>
      </div>
  )};
};

TaskBlock.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  WithTasks,
  withStyles(styles)
)(TaskBlock);