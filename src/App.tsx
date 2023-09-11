import React, { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import "./App.css";
import { Choice, RockScissorsPaper } from "./model/rockScissorsPaper";

const choice: RockScissorsPaper = {
  rock: {
    name: "Rock",
    img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2F3.gall-img.com%2Ftdgall%2Ffiles%2Fattach%2Fimages%2F82%2F030%2F513%2F277%2Fe32a16703d6a231ecd8a51cfbd90be11.jpg&type=sc960_832",
  },
  scissors: {
    name: "Scissors",
    img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2F3.gall-img.com%2Ftdgall%2Ffiles%2Fattach%2Fimages%2F82%2F344%2F132%2F282%2Fc169650c3cfe26a1596cd4a6f62c94a0.jpg&type=sc960_832",
  },
  paper: {
    name: "Paper",
    img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjJfMjky%2FMDAxNjg3Mzk4NjE1NzEw.4rgFhqRz99SjHs86UXraqZOHhBaygrKC7b21qu63ifgg.AUzVT8IsWgOR7jS2w7_N7wqbJ9OcJYwvYx3lJIzXUysg.JPEG.eunho8693%2FIMG_4803.JPG&type=sc960_832",
  },
};

const App: React.FC = () => {
  const [userSelect, setUserSelect] = useState<Choice>();
  const [computerSelect, setComputerSelect] = useState<Choice>();
  const [result, setResult] = useState("");

  const play = (userChoice: string) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice) as string);
  };

  const judgement = (user: Choice, computer: Choice) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
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
