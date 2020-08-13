export const ActionTypes = {
  GET_MOVIES: `GET_MOVIES`,
  SET_LOADING_FLAG: `SET_LOADING_FLAG`
};

const ActionCreator = {

  getMovies: (movies) => ({
    type: ActionTypes.GET_MOVIES,
    payload: movies
  }),

  setLoadingFlag: (flag) => ({
    type: ActionTypes.SET_LOADING_FLAG,
    payload: flag
  }),

};

export default ActionCreator;
