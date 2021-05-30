import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import IsUserLoggedIn from '../../routes/IsUserLoggedIn';
import ProtectedRoute from '../../routes/ProtectedRoute';

const BrowsePage = lazy(() => import('../../pages/Browse'));
const SignInPage = lazy(() => import('../../pages/SignIn'));
const SignUpPage = lazy(() => import('../../pages/SignUp'));
const HomePage = lazy(() => import('../../pages/Home'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

const App = () => {
  const user = null;
  return (
    <Router>
      <Suspense fallback={() => <div>Loading...</div>}>
        <Switch>
          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <BrowsePage />
          </ProtectedRoute>
          <IsUserLoggedIn
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
          >
            <SignInPage />
          </IsUserLoggedIn>
          <IsUserLoggedIn
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
          >
            <SignUpPage />
          </IsUserLoggedIn>
          <IsUserLoggedIn
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
          >
            <HomePage />
          </IsUserLoggedIn>
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
