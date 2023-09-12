import React, { useEffect } from "react";
import "./App.css";
import "./App.css";

const App: React.FC = () => {
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
  };

  return <div></div>;
};

export default App;
