import {
  ADMIN_PRODUCT_REQ,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const prodsAdminReducer = (
  state = { products: [] },
  AdminProductAction
) => {
  switch (AdminProductAction.type) {
    case ADMIN_PRODUCT_REQ:
      return {
        loading: true,
        products: [],
      };

    case ADMIN_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: AdminProductAction.payload,
      };
    case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: AdminProductAction.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
