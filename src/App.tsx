import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";

const App: React.FC = () => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }, []);

  const getWeatherByCurrentLocation = async (lat: number, lon: number) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <div className="container">
        <WeatherBox />
        <WeatherButton />
      </div>
    </div>
  );
};

export default App;
