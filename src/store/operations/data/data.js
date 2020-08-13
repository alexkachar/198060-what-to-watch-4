
import DataActionCreator from '../../actions/data/data';
import {formatMovies} from '../../../utils';

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getMovies(formatMovies(response.data)));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  }
};

export default Operation;
