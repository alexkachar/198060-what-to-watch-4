import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {AppRoutes} from '../../constants';
import MoviePage from '../movie-page/movie-page';

import Main from '../main/main';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={AppRoutes.MAIN}
        render={() => {
          return (
            <Main />
          );
        }}
      />
      <Route exact path={AppRoutes.MOVIE}
        render={() => {
          return (
            <MoviePage />
          );
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
