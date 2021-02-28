export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const GET_USER = "GET_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FAIL = "LOGIN_FAIL";


export interface Favorite{
  city: string;
}

 export interface UserData {
  name:string;
  surname:  string;
  username: string;
  email: string;
  favorites: Favorite [];
 }

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  data: {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
}


export interface WeatherError{
    cod: string;
    message: string;
}

export interface UserError{
  message: string;
}

export interface WeatherState{
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

export interface UserState{
  profile: UserData | null;
  loading: boolean;
  error: string;
  isLoggedIn: boolean;
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface GetUserDataAction {
  type: typeof GET_USER;
  payload: UserData;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface LoginAction {
  type: typeof LOGIN;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string
}

export type UserAction = LoginAction | GetUserDataAction | SetLoadingAction | SetErrorAction

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction


export interface AlertAction{
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState{
    message: string;
}

//LOGIN
export interface LoginLoading {
  type: typeof LOGIN_LOADING;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}
export interface LoginFail {
  type: typeof LOGIN_FAIL;
}


export type LoginDispachTypes = LoginLoading | LoginSuccess | LoginFail;