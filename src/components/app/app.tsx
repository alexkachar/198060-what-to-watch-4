import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {filterMovies} from '../../store/reducers/ui/selectors';
import {getGenres} from '../../store/reducers/data/selectors';
import Movie from '../../interfaces/movie';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import UiActionCreator from '../../store/actions/ui/ui';
interface Props {
  movies: Movie[];
  genres: string[];
  onGenreSelect: (genre: string) => void;
}

const App = (props: Props) => {
  const {movies, genres, onGenreSelect} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}
          render={() => {
            return (
              <Main
                movies={movies}
                genres={genres}
                onGenreSelect={onGenreSelect}
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

const mapDispatchToProps = (dispatch) => ({

  onGenreSelect(genre: string) {
    dispatch(UiActionCreator.selectGenre(genre));
  },

}); 

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
