import ActionCreator, {ActionTypes} from './ui';

describe(`UI action creator work correctly`, () => {
  it(`Action creator for selectGenre returns correct action`, () => {
    expect(ActionCreator.selectGenre(`Action`)).toEqual({
      type: ActionTypes.SELECT_GENRE,
      payload: `Action`,
    });
  });

});
