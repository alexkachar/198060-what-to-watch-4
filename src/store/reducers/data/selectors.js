import NameSpace from '../../name-space';
import {createSelector} from 'reselect';
import {getGenresList} from '../../../utils';

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

export const getMovieId = (state) => {
  return state[NAME_SPACE].movieId;
};

export const getMovieById = createSelector(
    [getMovies, getMovieId],
    (movies, movieId) => {
      return movies.find((movie) => movie.id === movieId);
    }
);

export const getGenres = (state) => {
  return getGenresList(state[NAME_SPACE].movies);
};

export const getLoadingFlag = (state) => {
  return state[NAME_SPACE].loading;
};
