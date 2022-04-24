import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_REQ,
  CLEAR_ERRORS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQ,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQ,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../constants/userConstants";

const initialState = {
  user: {},
};
export default function UserReducer(state = initialState, userAction) {
  switch (userAction.type) {
    case LOGIN_REQ:
    case REGISTER_USER_REQ:
    case LOAD_USER_REQ:
      return {
        loading: true,
        isAuth: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: userAction.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        user: null,
        error: userAction.payload,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuth: false,
        user: null,
        error: userAction.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuth: false,
        user: null,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: userAction.payload,
      };

    default:
      return state;
  }
}
