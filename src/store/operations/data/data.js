
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
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getFavorites(formatMovies(response.data)));
          });
  },

};

export default Operation;
