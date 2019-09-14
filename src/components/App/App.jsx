import React, { Fragment } from 'react';

import AppHeader from '../AppHeader';
import TaskBlock from '../Tasks';

const App = () => {
  return (
    <Fragment>
      <AppHeader title={'Tasks'}/>
      <main role="main" className="container">
        <TaskBlock />
      </main>
    </Fragment>
  );
};

export default App;