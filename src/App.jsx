import React, { Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import './App.scss';

// lazy loading
const SpecxProgramsWrapper = React.lazy(() =>
  import('./components/SpecxProgramsWrapper/SpecxProgramsWrapper'));

function App() {

  return (
    <Router history={createBrowserHistory()}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="" component={SpecxProgramsWrapper} />
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;