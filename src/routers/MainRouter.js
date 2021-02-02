import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
// Containers
const TheLayout = React.lazy(() => import('../containers/TheLayout'));

// Pages
const Page404 = React.lazy(() => import('../views/pages/page404'));
const Page500 = React.lazy(() => import('../views/pages/page500'));

const MainRouter = () => {
  return (
    <Suspense>
      <Switch>
        <Route
          path="/"
          name="Home"
          render={(props) => <TheLayout {...props} />}
        />
        <Route
          exact
          path="/404"
          name="Page 404"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={(props) => <Page500 {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

export default MainRouter;
