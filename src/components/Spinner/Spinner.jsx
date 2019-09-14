import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  progress: {
    margin: '15px auto'
  },
});

const Spinner = ({ classes }) => (
  <CircularProgress className={classes.progress} />
);

export default withStyles(styles)(Spinner);

