import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {filterMovies} from '../../store/reducers/ui/selectors';
import {getGenres} from '../../store/reducers/data/selectors';
import Movie from '../../interfaces/movie';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';

interface Props {
  movies: Movie[];
  genres: string[];
}

const App = (props: Props) => {
  const {movies, genres} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}
          render={() => {
            return (
              <Main
                movies={movies}
                genres={genres}
              />
            );
          }}
        />
        <Route exact path={AppRoutes.MOVIE}
          render={() => {
            return (
              <MoviePage
                movies={movies}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  movies: filterMovies(state),
  genres: getGenres(state)
});

export {App};
export default connect(mapStateToProps, null)(App);
