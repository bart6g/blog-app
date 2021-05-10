import {
  CLEAR_MSG,
  CLEAR_REGISTER,
  LOGIN,
  LOGOUT,
  REGISTER_USER,
  WAS_LOGGED,
} from "./userTypes";
import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
  //user contains login, email, password & passwordRepeat
  try {
    console.log(user);
    const response = await axios.post(
      "http://localhost:5000/users/register",
      user
    );
    if (response) {
      const { user, msg, success } = response.data;
      dispatch({
        type: REGISTER_USER,
        payload: {
          user,
          msg,
          success,
        },
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: REGISTER_USER,
      payload: {
        user: null,
        msg: "Something went wrong",
        success: false,
      },
    });
  }
};

export const clearRegisterForm = () => {
  return {
    type: CLEAR_REGISTER,
  };
};

export const loginUser = (user) => async (dispatch) => {
  //user contains login & password

  try {
    const response = await axios.post(
      "http://localhost:5000/users/login",
      user
    );
    if (response) {
      const { login, token, user, msg } = response.data;
      dispatch({
        type: LOGIN,
        payload: {
          login,
          token,
          user,
          msg,
        },
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN,
      payload: {
        login: false,
        token: null,
        user: null,
        msg: "Cannot login",
      },
    });
  }
};

export const clearMsg = () => {
  return {
    type: CLEAR_MSG,
  };
};

export const fetchFromLocalStorage = (user, token) => async (dispatch) => {
  try {
    const data = await axios.get("http://localhost:5000/users/get-userdata", {
      params: { id: user.id },
    });
    dispatch({
      type: WAS_LOGGED,
      payload: {
        user: data.data,
        token,
        login: true,
        msg: "Logged successfully",
      },
    });
  } catch (err) {
    dispatch({
      type: WAS_LOGGED,
      payload: {
        user: null,
        token: null,
        msg: "Cannot login",
        login: false,
      },
    });
  }
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
