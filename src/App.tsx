import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import "./App.css";
import { RockScissorsPaper } from "./model/rockScissorsPaper";

const choice: RockScissorsPaper = {
  rock: {
    name: "Rock",
    img: "",
  },
  scissors: {
    name: "Scissors",
    img: "",
  },
  paper: {
    name: "Paper",
    img: "",
  },
};

const App: React.FC = () => {
  const [userSelect, setUserSelect] = useState();

  const play = (userChoice: string) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className="buttons">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
};

export default App;
