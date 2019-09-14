import React from 'react';
import PropTypes from 'prop-types';

import TaskItem from '../TaskItem';
import Button from '../../Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  firstLineItem: {
    width: '30%',
    textAlign: 'center',
  },
  firstLineText: {
    color: grey[500],
  }
});

const TaskList = ({
  list,
  deleteItem,
  doneItem,
  editItem,
  classes,
}) => (
  <Paper>
    <List disablePadding={true}>
      <ListItem
        divider={true}
      >
        <ListItemText
          className={classes.firstLineItem}
          primary={<Typography className={classes.firstLineText}>Tasks</Typography>}
        />
      </ListItem>
      {list.map((el) => (
        <TaskItem item={el} key={el.id} editItem={editItem}>
          <Button type={'submit'} onClick={() => deleteItem(el.id)} title={'Remove'} />
          <Button type={'submit'} onClick={() => doneItem(el.id)} title={'Done'} disabled={el.done} />
        </TaskItem>
      ))}
    </List>
  </Paper>
);

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  deleteItem: PropTypes.func,
  doneItem: PropTypes.func,
  editItem: PropTypes.func,
};

export default withStyles(styles)(TaskList);
