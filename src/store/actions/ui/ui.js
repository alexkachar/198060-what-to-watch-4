export const ActionTypes = {
  SELECT_GENRE: `SELECT_GENRE`,
};

const ActionCreator = {

  selectGenre: (genre) => ({
    type: ActionTypes.SELECT_GENRE,
    payload: genre
  }),

};

export default ActionCreator;
