import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  form: {
    padding: '15px',
  },
});

class TaskAddForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onTaskAdded(this.state.label).then((data) => data ? this.setState({ label: '' }) : null);
  };

  onKeyPress = (e) => e.key === 'Enter' ? this.props.onTaskAdded(this.state.label).then((data) => data ? this.setState({ label: '' }) : null) : null;

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.form}>
        <TextField
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          value={this.state.label}
          disabled={this.props.disabled}
          onKeyPress={this.onKeyPress}
        />
        <Button
          className="btn btn-outline-secondary"
          onClick={this.onSubmit}
          disabled={!this.state.label.length || this.props.disabled}
          type={'submit'}
          title={'Add Item'}
        />
      </div>
    );
  }
}

TaskAddForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onTaskAdded: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(TaskAddForm);
