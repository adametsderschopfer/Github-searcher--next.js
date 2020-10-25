import { combineReducers } from "redux";
import interfaceReducer from "./interface.reducer";
import UsersReducer from "./users.reducer";


export default combineReducers({
  interface: interfaceReducer,
  users: UsersReducer
});
