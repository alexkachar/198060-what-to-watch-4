import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {filterMovies} from '../../store/reducers/ui/selectors';
import {getPromoMovie, getGenres} from '../../store/reducers/data/selectors';
import {getSelectedGenre} from '../../store/reducers/ui/selectors';
import Movie from '../../interfaces/movie';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import UiActionCreator from '../../store/actions/ui/ui';
interface Props {
  movies: Movie[];
  promoMovie: Movie;
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const App = (props: Props) => {
  const {movies, promoMovie, genres, onGenreSelect, selectedGenre} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.MAIN}
          render={() => {
            return (
              <Main
                movies={movies}
                promoMovie={promoMovie}
                genres={genres}
                selectedGenre={selectedGenre}
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
  promoMovie: getPromoMovie(state),
  genres: getGenres(state),
  selectedGenre: getSelectedGenre(state)
});

const mapDispatchToProps = (dispatch) => ({

  onGenreSelect(genre: string) {
    dispatch(UiActionCreator.selectGenre(genre));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
