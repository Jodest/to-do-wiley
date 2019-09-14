import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  item: {
    // width: '30%',
    justifyContent: 'space-between',
  },
  item_done: {
    'background-color': theme.palette.primary.main
  }
});

class TaskItem extends React.PureComponent {
  state = {
    title: this.props.item.title,
  };

  onChangeTitle = (e) => this.setState({ title: e.currentTarget.value });

  onLeaveField = () => this.props.item.title !== this.state.title ? this.props.editItem(this.props.item.id, this.state.title) : null;

  render() {
    const { item, classes, children } = this.props;

    return (
      <ListItem divider={true} className={item.done ? `${classes.item} ${classes.item_done}` : classes.item}>
        <InputBase
          type="text"
          value={this.state.title}
          onChange={this.onChangeTitle}
          onBlur={this.onLeaveField}
          disabled={item.done}
        />
        <div>
          {children}
        </div>
      </ListItem>
    );
  };
};

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array,
  item: PropTypes.object.isRequired,
  editItem: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
