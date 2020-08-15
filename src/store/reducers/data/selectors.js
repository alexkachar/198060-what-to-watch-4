import NameSpace from '../../name-space';
import {getGenresList} from '../../../utils';

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => {
  return state[NAME_SPACE].movies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

export const getGenres = (state) => {
  return getGenresList(state[NAME_SPACE].movies);
};

export const getLoadingFlag = (state) => {
  return state[NAME_SPACE].loading;
};
