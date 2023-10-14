import React from "react";
import Button from "react-bootstrap/Button";

interface WeatherButtonProps {
  cities: string[];
  setCity(city: string): void;
  getWeatherByCurrentLocation(): void;
  city: string;
}

const WeatherButton: React.FC<WeatherButtonProps> = ({
  cities,
  setCity,
  getWeatherByCurrentLocation,
  city,
}) => {
  return (
    <div>
      <Button
        variant={city === "" ? "dark" : "warning"}
        onClick={getWeatherByCurrentLocation}
      >
        현재 위치
      </Button>
      {cities.map((item) => (
        <Button
          variant={city === item ? "dark" : "warning"}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
