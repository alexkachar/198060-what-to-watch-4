import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/data/data';

const initialState = {
  movies: [],
  loading: true
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.GET_MOVIES:
      return extend(state, {
        movies: action.payload
      });

    case ActionTypes.SET_LOADING_FLAG:
      return extend(state, {
        loading: action.payload
      });
  }
  return state;
};

export default reducer;
