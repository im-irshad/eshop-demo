import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
const rootReducer = combineReducers({
  productReducer,
  productDetailsReducer,
});

export default rootReducer;
