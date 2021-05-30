import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';

const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return React.cloneElement(children, { user });
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.SIGN_IN,
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
export default ProtectedRoute;
