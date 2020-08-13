
import DataActionCreator from '../../actions/data/data';

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getMovies(response.data));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  }
};

export default Operation;
