import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../../Notification';

class WithError extends React.Component {
  state = {
    error: this.props.error ? true: false,
  };

  onClose = () => this.setState({ error: null });

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        {this.state.error ?
        <Notification
          onClose={this.onClose}
          open={this.state.error}
          timeToClose={6000}
          message={this.props.error.message}
          showClose={true}
        />
        : null}
      </React.Fragment>
    )
  };
};

WithError.propTypes = {
  error: PropTypes.object,
  children: PropTypes.object.isRequired,
};

export default WithError;
