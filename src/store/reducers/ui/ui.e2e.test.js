import {ActionTypes} from '../../actions/ui/ui';
import reducer from './ui';

describe(`UI reducer work correctly`, () => {

  it(`Should change genre with given value`, () => {
    const state1 = {
      selectedGenre: `All genres`
    };
    const action = {
      type: ActionTypes.SELECT_GENRE,
      payload: `Comedy`
    };
    expect(reducer(state1, action)).toMatchObject({
      selectedGenre: `Comedy`
    });
  });

  it(`Should change movieId with given value`, () => {
    const state2 = {
      movieId: null
    };
    const action = {
      type: ActionTypes.SET_MOVIE_ID,
      payload: 1
    };
    expect(reducer(state2, action)).toMatchObject({
      movieId: 1
    });
  });

});
