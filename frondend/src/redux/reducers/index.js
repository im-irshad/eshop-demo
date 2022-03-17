import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import UserReducer from "./UserReducer";
import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./orderReducer";

const rootReducer = combineReducers({
  productReducer,
  productDetailsReducer,
  UserReducer,
  profileReducer,
  cartReducer,
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
});

export default rootReducer;
