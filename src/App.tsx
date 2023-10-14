import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { WeatherData } from "./model/weather";

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const cities: string[] = ["paris", "new york", "tokyo", "seoul"];

  useEffect(() => {
    if (city === "") {
      getWeatherByCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const getWeatherByCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=12345&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setCity("");
      setLoading(false);
    });
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12345&units=metric`;
    setLoading(true);
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            getWeatherByCurrentLocation={getWeatherByCurrentLocation}
            city={city}
          />
        </div>
      )}
    </div>
  );
};

export default App;
