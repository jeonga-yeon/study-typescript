import React from "react";
import { useNavigate } from "react-router-dom";

const Aboutpage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
};

export default Aboutpage;
