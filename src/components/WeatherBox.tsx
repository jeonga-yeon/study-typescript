import React from "react";
import { WeatherData } from "../model/weather";

interface WeatherBoxProps {
  weather?: WeatherData;
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}°C /{" "}
        {weather && ((weather.main.temp * 9) / 5 + 32).toFixed(2)}℉
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
