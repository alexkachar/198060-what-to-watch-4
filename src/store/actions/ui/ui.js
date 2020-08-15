export const ActionTypes = {
  SELECT_GENRE: `SELECT_GENRE`,
  SET_MOVIE_ID: `SET_MOVIE_ID`,
};

const ActionCreator = {

  selectGenre: (genre) => ({
    type: ActionTypes.SELECT_GENRE,
    payload: genre
  }),

  setMovieId: (movieId) => ({
    type: ActionTypes.SET_MOVIE_ID,
    payload: movieId
  }),

};

export default ActionCreator;
