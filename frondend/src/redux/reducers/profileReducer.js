import {
  UPDATE_PROFILE_REQ,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  CLEAR_ERRORS,
} from "../constants/userConstants";

const initialState = {
  user: {},
};
export default function profileReducer(state = initialState, profileAction) {
  switch (profileAction.type) {
    case UPDATE_PROFILE_REQ:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: profileAction.payload,
      };

    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: profileAction.payload,
      };

    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
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
