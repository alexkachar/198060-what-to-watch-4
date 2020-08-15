
import DataActionCreator from '../../actions/data/data';
import {formatMovie, formatMovies} from '../../../utils';

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getMovies(formatMovies(response.data)));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films/promo`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getPromoMovie(formatMovie(response.data)));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  }

};

export default Operation;
