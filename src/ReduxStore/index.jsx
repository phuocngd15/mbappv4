import { combineReducers } from "redux";
//import authenticationReducer from "./slice/authenticationSlice";
import userReducer from "./slice/userSlice";
export default combineReducers({
  //authentication: authenticationReducer,
  userReducer: userReducer,
});
