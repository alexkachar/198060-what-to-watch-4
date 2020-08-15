import {ActionTypes} from '../../actions/data/data';
import reducer from './data';
import MOCK_MOVIES from '../../../test-data/mock-movies';

describe(`Data reducer work correctly`, () => {

  it(`Should change movies with given value`, () => {
    const state1 = {
      movies: []
    };
    const action = {
      type: ActionTypes.GET_MOVIES,
      payload: MOCK_MOVIES
    };
    expect(reducer(state1, action)).toMatchObject({
      movies: MOCK_MOVIES
    });
  });

  it(`Should change promoMovie with given value`, () => {
    const state2 = {
      promoMovie: null
    };
    const action = {
      type: ActionTypes.GET_PROMO_MOVIE,
      payload: MOCK_MOVIES[0]
    };
    expect(reducer(state2, action)).toMatchObject({
      promoMovie: MOCK_MOVIES[0]
    });
  });

  it(`Should change movieId with given value`, () => {
    const state3 = {
      movieId: null
    };
    const action = {
      type: ActionTypes.SET_MOVIE_ID,
      payload: 1
    };
    expect(reducer(state3, action)).toMatchObject({
      movieId: 1
    });
  });

  it(`Should change loading with given flag `, () => {
    const state4 = {
      loading: true
    };
    const action = {
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    };
    expect(reducer(state4, action)).toMatchObject({
      loading: false
    });
  });
});
