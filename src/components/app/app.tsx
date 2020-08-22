import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {filterMovies, getMoviesLimit} from '../../store/reducers/ui/selectors';
import {getPromoMovie, getGenres, getLoadingFlag} from '../../store/reducers/data/selectors';
import {getSelectedGenre} from '../../store/reducers/ui/selectors';
import {getAuthFlag} from '../../store/reducers/user/selectors';
import {MOVIES_LIMIT_ADD_STEP} from '../../constants';
import UiActionCreator from '../../store/actions/ui/ui';
import UserOperation from '../../store/operations/user/user';
import Movie from '../../interfaces/movie';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import Login from '../login/login';

interface Props {
  movies: Movie[];
  promoMovie: Movie;
  genres: string[];
  selectedGenre: string;
  moviesLimit: number;
  loading: boolean;
  isAuth: boolean;
  onGenreSelect: (genre: string) => void;
  onShowMoreClick: () => void;
  onLogin: (authData: {}) => void;
}

const App = (props: Props) => {
  const {
    isAuth,
    movies,
    promoMovie,
    genres,
    selectedGenre,
    moviesLimit,
    loading,
    onGenreSelect,
    onShowMoreClick,
    onLogin
  } = props;
  const showMoreAccess = movies.length > moviesLimit;
  const moviesToList = movies.slice(0, moviesLimit);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}
          render={() => {
            return (
              <Main
                movies={moviesToList}
                promoMovie={promoMovie}
                genres={genres}
                selectedGenre={selectedGenre}
                showMoreAccess={showMoreAccess}
                onGenreSelect={onGenreSelect}
                onShowMoreClick={onShowMoreClick}
              />
            );
          }}
        />
        <Route exact path={AppRoutes.MOVIE}
          render={({match}) => {
            const {id} = match.params;
            return (
              <MoviePage
                movieId={id}
              />
            );
          }}
        />
        <Route exact path={AppRoutes.LOGIN}
          render={() => {
            return (
              <Login
                onLogin={onLogin}
                loading={loading}
                isAuth={isAuth}
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
  promoMovie: getPromoMovie(state),
  genres: getGenres(state),
  selectedGenre: getSelectedGenre(state),
  moviesLimit: getMoviesLimit(state),
  loading: getLoadingFlag(state),
  isAuth: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({

  onGenreSelect(genre: string) {
    dispatch(UiActionCreator.selectGenre(genre));
    dispatch(UiActionCreator.resetMoviesLimit());
  },

  onShowMoreClick: () => {
    dispatch(UiActionCreator.setMoviesLimit(MOVIES_LIMIT_ADD_STEP));
  },

  onLogin(authData: {}) {
    dispatch(UserOperation.login(authData));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
