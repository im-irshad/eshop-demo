import axios from "axios";

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

// .........LOGIN ACTIONS...........
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQ });
    const config = { headers: { "content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/login",
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// .........REGISTER ACTIONS...........
export const registerUser = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch({ type: REGISTER_USER_REQ });
    const config = { headers: { "content-Type": "application/json" } };

    const { data } = await axios.post("/api/v1/register", userData, config);
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// .........CLEAR ERROR ACTIONS...........
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

// .........LOAD USER ACTIONS...........
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQ });

    const { data } = await axios.get(`/api/v1/me`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// .........LOGOUT USER ACTIONS...........
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};
