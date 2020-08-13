import {ActionTypes} from '../../actions/ui/ui';
import reducer from './ui';

describe(`UI reducer work correctly`, () => {

  it(`Should change genre with given value`, () => {
    const state1 = {
      genre: `All genres`
    };
    const action = {
      type: ActionTypes.SELECT_GENRE,
      payload: `Comedy`
    };
    expect(reducer(state1, action)).toMatchObject({
      genre: `Comedy`
    });
  });

});
