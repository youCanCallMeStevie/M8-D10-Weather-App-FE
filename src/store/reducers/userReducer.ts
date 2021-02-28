import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    LOGIN,
    LOGOUT,
    SET_LOADING,
    GET_USER,
    SET_ERROR,
    UserAction,
    UserState,
    LoginDispachTypes,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  } from "../types";
  

  const initialState: UserState = {
    profile: null,
    loading: false,
    error: "",
    isLoggedIn: false
  };
  
  
  export default (state = initialState, action: LoginDispachTypes): UserState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{
            ...state,
            isLoggedIn: true,
            profile: action.payload,
            error: ""

        }
      case LOGIN_LOADING:
        return {
          ...state,
          profile: null,
          loading: true,
          error: "",
        };
       
      case LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          error: "Login was not succesful",
        };
      default:
        return state;
    }
  };
  