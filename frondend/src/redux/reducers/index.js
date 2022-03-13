import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import UserReducer from "./UserReducer";
import profileReducer from "./profileReducer";
const rootReducer = combineReducers({
  productReducer,
  productDetailsReducer,
  UserReducer,
  profileReducer,
});

export default rootReducer;
