import { ThunkAction } from "redux-thunk";
import axios from  "axios";

import { RootState } from "..";
import { Dispatch } from "redux";
import {
  LoginDispatchTypes,
  FavDispatchTypes,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES
} from "../types";


export const getCurrentUser = () => async (
  dispatch: Dispatch<LoginDispatchTypes>
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
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};


export const addFavCity = (key: string) => async (
  dispatch: Dispatch<FavDispatchTypes>
) => {
  try {
  const cityResp = await axios.get(
      `${process.env.REACT_APP_BE_URL}/users/favorite/${key}`,
      {
        withCredentials: true,
      }
    );
    console.log("cityResp", cityResp)

    const cityInfo = await cityResp.data;
    console.log("cityInfo", cityInfo)

    dispatch({
      type: ADD_TO_FAVORITES,
      payload: cityInfo,
    });
  } catch (error) {
    console.log(error);
  }
  }


  export const removeFavCity = (key: string) => async (
    dispatch: Dispatch<FavDispatchTypes>
  ) => {
    try {
    const cityResp = await axios.delete(
        `${process.env.REACT_APP_BE_URL}/users/favorite/${key}`,
        {
          withCredentials: true,
        }
      );
      console.log("cityResp", cityResp)
  
      const cityInfo = await cityResp.data;
      console.log("cityInfo", cityInfo)
  
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: cityInfo,
      });
    } catch (error) {
      console.log(error);
    }
    }