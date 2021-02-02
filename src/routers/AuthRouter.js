import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

import Login from '../views/pages/login';

const AuthRouter = () => {
  return (
    <Suspense fallback={Loading}>
      <Switch>
        <Route
          exact
          path="/login"
          name="Sign In Page"
          render={(props) => <Login {...props} />}
        />
        <Redirect to={'/login'} />
      </Switch>
    </Suspense>
  );
};

export default AuthRouter;
