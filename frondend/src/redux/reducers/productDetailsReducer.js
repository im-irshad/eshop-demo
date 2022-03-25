import {
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

const initialState = {
  product: [],
};

export default function productDetailsReducer(
  state = initialState,
  productDetailAction
) {
  switch (productDetailAction.type) {
    case PRODUCT_DETAILS_REQ:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      console.log(productDetailAction.payload);
      return {
        loading: false,
        product: productDetailAction.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: productDetailAction.payload,
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
