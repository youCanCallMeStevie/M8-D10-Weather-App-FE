import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  UserAction,
  UserData,
  UserError,
  GET_USER,
  SET_LOADING,
  SET_ERROR,
} from "../types";
const { REACT_APP_WEATHER_BASE_URL, REACT_APP_BE_URL } = process.env;



export const getUser = (): UserAction => {
  return {
    type: GET_USER,
    payload: { username: "", name: "", email: "", surname: "", favorites: [] },
  };
};

export const setLoading = (): UserAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): UserAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
