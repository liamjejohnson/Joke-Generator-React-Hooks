import React, { useState } from "react";
import "./App.css";

const App = props => {
  const [data, setData] = useState("");

  const fetchJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: { Accept: "application/json" }
    })
      .then(res => res.json())
      .then(newJoke => setData(newJoke.joke))
      .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <header className="header">Dad Joke Generator</header>
      <button onClick={fetchJoke}>Generate Joke</button>
      <div className="joke">{data}</div>
    </div>
  );
};

export default App;
