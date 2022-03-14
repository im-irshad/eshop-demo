import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import UserReducer from "./UserReducer";
import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  productReducer,
  productDetailsReducer,
  UserReducer,
  profileReducer,
  cartReducer,
});

export default rootReducer;
