import {
  ALL_PRODUCT_REQ,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../actions/productConstants";

const initialState = {
  products: [],
};
export default function productReducer(state = initialState, productAction) {
  switch (productAction.type) {
    case ALL_PRODUCT_REQ:
      return {
        loading: true,
        products: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: productAction.payload.product,
      };
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: productAction.payload,
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
