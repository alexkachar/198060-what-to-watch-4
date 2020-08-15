import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/ui/ui';

const initialState = {
  selectedGenre: `All genres`,
  movieId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SELECT_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionTypes.SET_MOVIE_ID:
      return extend(state, {
        movieId: action.payload
      });

  }
  return state;
};

export default reducer;
