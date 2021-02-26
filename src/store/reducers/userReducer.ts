import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    LOGIN,
    LOGOUT,
    SET_LOADING,
    GET_USER,
    SET_ERROR,
    UserAction,
    UserState
  } from "../types";
  

  const initialState: UserState = {
    data: null,
    loading: false,
    error: "",
    isLoggedIn: false
  };
  
  
  export default (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case LOGIN:
            return{
            ...state,
            isLoggedIn: true
        }
      case GET_USER:
        return {
          data: action.payload,
          loading: false,
          error: "",
          isLoggedIn: true
        };
       
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };
      case SET_ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  