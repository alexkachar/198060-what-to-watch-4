import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/ui/ui';

const initialState = {
  genre: `All genres`,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SELECT_GENRE:
      return extend(state, {
        genre: action.payload
      });

  }
  return state;
};

export default reducer;
