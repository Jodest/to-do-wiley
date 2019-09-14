import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../Spinner';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  item: {
    width: '30%'
  }
});

const WithLoading = ({ loading, children }) => {
  if (loading) {
    return <Spinner />;
  }

  return children;
};

WithLoading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WithLoading);
