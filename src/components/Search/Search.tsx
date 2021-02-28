import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../store/actions/alertActions";
import {UserState} from "../../store/types"
import {getWeather, setLoading} from "../../store/actions/weatherActions";
import {getUser } from "../../store/actions/userActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudSun, faHeart} from "@fortawesome/free-solid-svg-icons";
// import {Link} from "react-router-dom"
interface SearchProps {
  title: string;
}
interface State {
user:UserState,
}
function Search({ title }: SearchProps) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  console.log("STATE", state)
  //const isLogged = state.user.isLoggedIn
 const isLogged = useSelector((state:State) => state.user.isLoggedIn);
 const user = useSelector((state:State) => state.user.data);

  const [city, setCity] = useState("");
  const[loggedIn, setLoggedIn]=useState("false")


  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };



  return (

<div className="search-container">
<div className="level-item">
<form onSubmit={handleSubmit}>

      <div className="field has-addons">

        <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleChange}
              style={{fontSize: "20px"}}
            />       
        <p className="control">
          <button className="button">
          <FontAwesomeIcon icon={faCloudSun}  style={{marginRight:"8px", color:"grey"}}/> Get Weather
          </button>
        </p>
        </div>
        {isLogged && (
            <div className="mr-5" style={{display: "contents"}}>
              <div className="">Hi, {user?.name}</div>
            
                <FontAwesomeIcon icon={faHeart} />
                {user && user.favorites?.length && (<div>`${user.favorites?.length}`</div>)}
              </div>          )}
          <button >
            {!isLogged ? (
              <a
                href={`${process.env.REACT_APP_BE_URL}/users/auth/googleLogin`}
              >
                LOGIN
              </a>
            ) : (
              <div >LOGOUT</div>
            )}
          </button>
        <a
                href={`${process.env.REACT_APP_BE_URL}/users/auth/googleLogin`}
              >
                LOGIN
              </a>
        </form>

      </div>
</div>

  );
}

export default Search;
