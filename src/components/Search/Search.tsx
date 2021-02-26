import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/actions/alertActions";
import {getWeather, setLoading} from "../../store/actions/weatherActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCloudSun} from "@fortawesome/free-solid-svg-icons"

interface SearchProps {
  title: string;
}
function Search({ title }: SearchProps) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
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
        </form>

      </div>
</div>

    // <div className="search-container">
    //   <div className="">
    //     <div className="">
    //       <h1 className="">{title}</h1>
    //       <form onSubmit={handleSubmit}>
    //         <input
    //           type="text"
    //           placeholder="Enter city name"
    //           value={city}
    //           onChange={handleChange}
    //         />
    //         <button className="">Search</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Search;
