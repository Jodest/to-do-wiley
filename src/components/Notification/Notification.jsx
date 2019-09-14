import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const styles = () => ({
  item: {
    width: '30%'
  }
});

const Notification = ({
  open,
  onClose,
  timeToClose,
  message,
  showClose,
}) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={open}
    autoHideDuration={timeToClose}
    onClose={() => onClose()}
    ContentProps={{
      'aria-describedby': 'message-id',
    }}
    message={<span id="message-id">{message}</span>}
    action={showClose ? [
      <IconButton
        key="close"
        aria-label="close"
        color="inherit"
        onClick={() => onClose()}
      >
        Close
      </IconButton>,
    ] : null}
  />
);

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Notification);
