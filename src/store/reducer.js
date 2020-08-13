import {combineReducers} from "redux";
import data from "./reducers/data/data";
import user from "./reducers/user/user";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user,
});
