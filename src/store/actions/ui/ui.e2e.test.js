import ActionCreator, {ActionTypes} from './ui';

describe(`UI action creator work correctly`, () => {
  it(`Action creator for selectGenre returns correct action`, () => {
    expect(ActionCreator.selectGenre(`Action`)).toEqual({
      type: ActionTypes.SELECT_GENRE,
      payload: `Action`,
    });
  });

  it(`Action creator for setMovieId returns correct action`, () => {
    expect(ActionCreator.setMovieId(1)).toEqual({
      type: ActionTypes.SET_MOVIE_ID,
      payload: 1
    });
  });

});
