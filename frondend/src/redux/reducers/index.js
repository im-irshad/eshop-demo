import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import UserReducer from "./UserReducer";
const rootReducer = combineReducers({
  productReducer,
  productDetailsReducer,
  UserReducer,
});

export default rootReducer;
