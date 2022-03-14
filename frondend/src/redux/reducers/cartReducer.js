import { ADD_TO_CART, REMOVE_CART_ITEM } from "../constants/cartConstants";

const initialState = {
  cartItems: [],
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

    default:
      return state;
  }
}
