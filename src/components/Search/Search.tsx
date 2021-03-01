import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/actions/alertActions";
import { Favorite, UserState } from "../../store/types";
import { getWeather, setLoading } from "../../store/actions/weatherActions";
import { getCurrentUser, addFavCity, removeFavCity } from "../../store/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faHeart } from "@fortawesome/free-solid-svg-icons";
// import {Link} from "react-router-dom"
interface SearchProps {
  title: string;
}
interface State {
  user: UserState;
}

// interface Props {
//   city: Favorite
// }
function Search({ title }: SearchProps ) {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state)
  const isLogged = useSelector((state: State) => state.user.isLoggedIn);
  const user = useSelector((state: State) => state.user.profile);
  // const isFav = useSelector((state: State) => state.user.profile?.favCities)

	// const addFavorite = () => {
	// 	dispatch(addFavCity(props.city));
	// };

	// const removeFavorite = () => {
	// 	dispatch(removeFavCity(props.city));
	// };
  const [cityWeather, setCityWeather] = useState("");

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCityWeather(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cityWeather.trim() === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading());
    dispatch(getWeather(cityWeather));
    setCityWeather("");
  };

  return (
    <div className="search-container">
      <div className="level-item">
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <input
              type="text"
              placeholder="Enter city name"
              value={cityWeather}
              onChange={handleChange}
              style={{ fontSize: "20px" }}
            />
            <p className="control">
              <button className="button">
                <FontAwesomeIcon
                  icon={faCloudSun}
                  style={{ marginRight: "8px", color: "grey" }}
                />{" "}
                Get Weather
              </button>
            </p>
          </div>
          {/* {isLogged && (
            <div className="mr-5" style={{ display: "contents" }}>
              <div className="">Hi, {user?.name}</div>
              {user?.favCities.includes(props.city) ? (
							<div className='fav-btn' onClick={removeFavorite}>
              <FontAwesomeIcon icon={faHeart} />
							</div>
						) : (
							<div className='fav-btn' onClick={addFavorite}>
              <FontAwesomeIcon icon={faHeart} />
							</div>
						)}
            </div> */}
          {/* )} */}
              {user && user.favCities?.length && (
                <div>`${user.favCities?.length}`</div>
              )}



          <button>
            {!isLogged ? (
              <a
                href={`${process.env.REACT_APP_BE_URL}/users/auth/googleLogin`}
              >
                LOGIN
              </a>
            ) : (
              <a
                href={`${process.env.REACT_APP_BE_URL}/users/auth/logout`}
              >
                LOGOUT
              </a>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
