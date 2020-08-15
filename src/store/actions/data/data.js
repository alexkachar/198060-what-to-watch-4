export const ActionTypes = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  SET_LOADING_FLAG: `SET_LOADING_FLAG`,
};

const ActionCreator = {

  getMovies: (movies) => ({
    type: ActionTypes.GET_MOVIES,
    payload: movies
  }),

  getPromoMovie: (movie) => ({
    type: ActionTypes.GET_PROMO_MOVIE,
    payload: movie
  }),

  setLoadingFlag: (flag) => ({
    type: ActionTypes.SET_LOADING_FLAG,
    payload: flag
  }),

};

export default ActionCreator;
