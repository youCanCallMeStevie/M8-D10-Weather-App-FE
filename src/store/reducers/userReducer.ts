import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  FavDispatchTypes,
  UserState,
  LoginDispatchTypes,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  UserData,
} from "../types";

const initialState: UserState = {
  profile: null,
  loading: false,
  error: "",
  isLoggedIn: false,
};

export default (
  state = initialState,
  action: LoginDispatchTypes | FavDispatchTypes
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload,
        error: "",
      };
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
    // case ADD_TO_FAVORITES:
    //   return {
    //     ...state,
    //     profile: {
    //       ...state.profile,
    //       favCities: state.profile.favCities.concat(action.payload),
    //     }
    //   };
    // case REMOVE_FROM_FAVORITES:
    //   return {
    //     ...state,
    //     profile:{
    //       ...state.profile.favCities.filter(
    //         (city: string) => city.id !== action.payload.id //because now adding an object, have to check property
    //       ),
    //   }
    // };
    default:
      return state;
  }
};
