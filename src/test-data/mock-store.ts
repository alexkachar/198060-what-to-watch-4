import {createStore} from 'redux';

import MOCK_MOVIES from './mock-movies';
import Movie from '../interfaces/movie';

const movies: Movie[] = MOCK_MOVIES;

const store = createStore(() => ({
  DATA: {
    movies: movies,
    promoMovie: movies[0],
    loading: false
  },
  UI: {
    selectedGenre: `All genres`,
    movieId: 1
  },
  USER: {
    authStatus: `AUTH`,
    user: null
  }
}));

export default store;
