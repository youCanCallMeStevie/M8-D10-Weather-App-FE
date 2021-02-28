import { ThunkAction } from "redux-thunk";
import axios from  "axios";

import { RootState } from "..";
import { Dispatch } from "redux";
import {
  LoginDispachTypes,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UserAction,
  UserData,
  UserError,
  GET_USER,
  SET_LOADING,
  SET_ERROR,
} from "../types";





// export const getUser = (): UserAction => {
//   return {
//     type: GET_USER,
//     payload: { username: "", name: "", email: "", surname: "", favorites: [] },
//   };
// };

// export const setLoading = (): UserAction => {
//   return {
//     type: SET_LOADING,
//   };
// };

// export const setError = (): UserAction => {
//   return {
//     type: SET_ERROR,
//     payload: "",
//   };
// };

export const getCurrentUser = () => async (
  dispatch: Dispatch<LoginDispachTypes>
) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });

    const userResp = await axios.get(
      `${process.env.REACT_APP_BE_URL}/users/me`,
      {
        withCredentials: true,
      }
    );
    console.log("userResp", userResp)

    const user = await userResp.data;
    console.log("user", user)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
