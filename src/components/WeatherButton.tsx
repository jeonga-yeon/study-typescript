import React from "react";
import Button from "react-bootstrap/Button";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">현재 위치</Button>
      <Button variant="warning">파리</Button>
      <Button variant="warning">뉴욕</Button>
    </div>
  );
};

export default WeatherButton;
