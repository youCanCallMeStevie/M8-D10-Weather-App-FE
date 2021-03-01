import React, {useState} from "react";
import { WeatherData } from "../../store/types";
import "../Weather/Weather.css";

interface WeatherProps {
  data: WeatherData;
}
function Weather({ data }: WeatherProps) {
  const fDegrees = (data.data.main.temp * 1.8 - 459.67).toFixed(1);
  const cDegrees = (data.data.main.temp - 273.15).toFixed(1);
  const backgroundImage = `/images/${data?.data.weather[0].icon}.jpeg`;
  console.log("data.data", data.data)
  const [isFav, setIsFave] = useState(false);


  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        zIndex: -1,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="main-wrapper">
        <div className="heading-container">
          <h1 className="city-country">
            {data?.data.name} <span style={{fontSize:"18px"}}>({data?.data.sys.country})</span>
          </h1>
          
          <div className="description-container">
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${data?.data.weather[0].icon}@2x.png`}
              alt="icon representing weather condition"
            />
          </p>
          <h3>{data?.data.weather[0].description}</h3>

          </div>
          <div className="temp-container">
            
            <div className="main-temp">
              {fDegrees}
              <sup>&#8457;</sup>{" "}
              <span style={{fontSize:"18px"}}>({cDegrees}
              <sup>&#8451;</sup>)</span>
            </div>
    
          </div>
        </div>
        <div className="humiditiy-container">
          <h3>humidity</h3>
          <p>{data.data.main.humidity}</p>
        </div>
        <div className="pressure-container">
          <h3>pressure</h3>
          <p>{data.data.main.pressure}</p>
        </div>
        <div className="wind-container">
          <h3>wind</h3>
          <p>{data.data.wind.speed} m/s</p>
        </div>
      </div>
  </section>
  );
}

export default Weather;
