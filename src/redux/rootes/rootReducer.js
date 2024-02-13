import { combineReducers } from "redux";
import sidebarReducer from "../reducers/sideBar";
import authenticationReducer from "../reducers/authentication";

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  authentication: authenticationReducer,
  
  // Add other reducers here if you have them
});

export default rootReducer;
