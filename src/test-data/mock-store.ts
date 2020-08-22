import {createStore} from 'redux';

import MOCK_MOVIES from './mock-movies';
import Movie from '../interfaces/movie';
import MOCK_USER from './user';
import User from '../interfaces/user';

const movies: Movie[] = MOCK_MOVIES;
const user: User = MOCK_USER;

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
    user: user
  }
}));

export default store;
