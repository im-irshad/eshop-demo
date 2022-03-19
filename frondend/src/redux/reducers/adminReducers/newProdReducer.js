import {
  NEW_PRODUCT_REQ,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  NEW_PRODUCT_RESET,
  CLEAR_ERRORS,
} from "../../constants/productConstants";

export default function newProdReducer(
  state = { product: {} },
  adminProductAction
) {
  switch (adminProductAction.type) {
    case NEW_PRODUCT_REQ:
      return {
        ...state,
        loading: true,
      };
    case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: adminProductAction.payload.success,
        product: adminProductAction.payload.product,
      };
    case NEW_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: adminProductAction.payload,
      };
    case NEW_PRODUCT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
