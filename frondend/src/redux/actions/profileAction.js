import axios from "axios";

import {
  UPDATE_PROFILE_REQ,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  CLEAR_ERRORS,
} from "../constants/userConstants";

// .........REGISTER ACTIONS...........
export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQ });
    const config = { headers: { "content-Type": "application/json" } };

    const { data } = await axios.put("/api/v1/me/update", userData, config);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// .........CLEAR ERROR ACTIONS...........
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
