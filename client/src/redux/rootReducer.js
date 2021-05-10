import { combineReducers } from "redux";
import blogReducer from "./blog/blogReducer";

import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  userData: userReducer,
  blogData: blogReducer,
});

export default rootReducer;
