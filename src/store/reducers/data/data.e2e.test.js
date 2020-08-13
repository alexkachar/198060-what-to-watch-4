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

  it(`Should change loading with given flag `, () => {
    const state2 = {
      loading: true
    };
    const action = {
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    };
    expect(reducer(state2, action)).toMatchObject({
      loading: false
    });
  });
});
