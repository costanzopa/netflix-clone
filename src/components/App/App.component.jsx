import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';

const HomePage = lazy(() => import('../../pages/Home'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={() => <div>Loading...</div>}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
