import React from 'react';
import { HashRouter } from 'react-router-dom';

import './scss/style.scss';
import RootRouter from './routers/RootRouter';

const Loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={Loading}>
        <RootRouter />
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
