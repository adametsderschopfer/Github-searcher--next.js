import { combineReducers } from "redux";
import interfaceReducer from "./interface.reducer";

export default combineReducers({
  interface: interfaceReducer,
});
