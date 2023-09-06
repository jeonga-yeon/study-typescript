import React from "react";
import "../App.css";

interface BoxProps {
  title: string;
}

const Box: React.FC<BoxProps> = ({ title }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img src="" alt="가위" className="image" />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
