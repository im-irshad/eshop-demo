import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

const initialState = {
  cartItems: [],
  shippingInfo: {},
};
export default function cartReducer(state = initialState, cartAction) {
  switch (cartAction.type) {
    case ADD_TO_CART:
      const item = cartAction.payload;

      const alreadyAdded = state.cartItems.find((itm) => {
        return itm.product === item.product;
      });
      if (alreadyAdded) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) => {
            return i.product === alreadyAdded.product ? item : i;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itm) => itm.product !== cartAction.payload
        ),
      };

    case SAVE_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: cartAction.payload,
      };

    default:
      return state;
  }
}
