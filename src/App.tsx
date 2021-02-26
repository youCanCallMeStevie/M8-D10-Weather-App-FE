import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./store";
import Search from "./components/Search/Search";
import Weather from "./components/Weather/Weather";
import { setAlert } from "./store/actions/alertActions";
import { setError } from "./store/actions/weatherActions";
import Alert from "./components/Alert/Alert";
import Loader from "./Loader/Loader"
import {getWeather, setLoading} from "./store/actions/weatherActions"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);
  
  useEffect(() =>{
    dispatch(setLoading());
dispatch(getWeather("London"))
  },[])
  
  return (
  <div className="App">
<Search title = "Enter city name & press search button"/>
{alertMsg && <Alert message={alertMsg} onClose={()=> dispatch(setAlert(""))}/>}
{error && <Alert message={error} onClose={()=> dispatch(setError())}/>}

{loading? <Loader />: weatherData && <Weather data={weatherData}/>}

  </div>
  );
}

export default App;
