import {createSelector} from 'reselect';
import NameSpace from '../../name-space';
import {getMovies} from '../data/selectors';

const NAME_SPACE = NameSpace.UI;

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const filterMovies = createSelector(
    [getGenre, getMovies],
    (genre, movies) => {
      if (genre === `All genres`) {
        return movies;
      }

      return movies.filter((movie) => movie.genre === genre);
    }
);
