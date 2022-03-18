import {
  ADMIN_PRODUCT_REQ,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  CLEAR_ERRORS,
} from "../../constants/productConstants";

export default function prodsAdminReducer(
  state = { products: [] },
  adminProductAction
) {
  switch (adminProductAction.type) {
    case ADMIN_PRODUCT_REQ:
      return {
        loading: true,
        products: [],
      };

    case ADMIN_PRODUCT_SUCCESS:
      console.log(adminProductAction);
      return {
        loading: false,
        products: adminProductAction.payload,
      };
    case ADMIN_PRODUCT_FAIL:
      return {
        loading: false,
        error: adminProductAction.payload,
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
