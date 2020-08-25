import {combineReducers} from 'redux';
import data from './reducers/data/data';
import ui from './reducers/ui/ui';
import user from './reducers/user/user';
import review from './reducers/review/review';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
});
