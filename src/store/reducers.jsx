import { combineReducers } from 'redux';

import { updateTasksList } from './tasks';

const appReducer = combineReducers({
  updateTasksList,
});

export default appReducer;