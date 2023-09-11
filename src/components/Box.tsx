import React from "react";
import "../App.css";
import { Choice } from "../model/rockScissorsPaper";

interface BoxProps {
  title: string;
  item?: Choice;
  result: string;
}

const Box: React.FC<BoxProps> = ({ title, item, result }) => {
  return (
    <div
      className={`box ${
        result === "Tie"
          ? "black"
          : result === "Win"
          ? "green"
          : result === "Lose"
          ? "red"
          : "nothing"
      }`}
    >
      <h1>{title}</h1>
      <img src={item?.img} className="image" />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
