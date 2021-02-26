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
