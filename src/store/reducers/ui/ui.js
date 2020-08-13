import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/ui/ui';

const initialState = {
  selectedGenre: `All genres`,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SELECT_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

  }
  return state;
};

export default reducer;
