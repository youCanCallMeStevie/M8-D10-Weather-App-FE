import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import {
  WeatherAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types";
const {REACT_APP_WEATHER_BASE_URL, REACT_APP_BE_URL } = process.env

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await fetch(
        `${REACT_APP_WEATHER_BASE_URL}/search?city=${city}`
      );
      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }
      const resData: WeatherData = await res.json();
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
