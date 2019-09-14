import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from './theme';

import store from './store/store';

import App from './components/App';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={muiTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
