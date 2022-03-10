import {
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../actions/productConstants";

const initialState = {
  product: [],
};

export default function productDetailsReducer(
  state = initialState,
  productAction
) {
  switch (productAction.type) {
    case PRODUCT_DETAILS_REQ:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: productAction.payload,
      };
    case PRODUCT_DETAILS_FAIL:
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
