import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api';
import Operation from './data';
import {ActionTypes} from '../../actions/data/data';
import MOCK_MOVIES from '../../../test-data/mock-movies';

const api = createAPI(jest.fn());

describe(`loadMovies operation works correctly`, () => {
  it(`Should make a correct API call to /films and get movies`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, MOCK_MOVIES);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionTypes.SET_LOADING_FLAG,
              payload: true});
      },
      {
        type: ActionTypes.GET_MOVIES,
        payload: MOCK_MOVIES
      }
      );
  });

});
