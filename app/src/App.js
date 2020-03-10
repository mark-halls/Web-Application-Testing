import React, { useState } from "react";
import "./App.css";

import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

function App() {
  const [scoreboard, setScoreboard] = useState({
    ball: 0,
    strike: 0
  });

  return (
    <div className="App">
      <Display scoreboard={scoreboard} />
      <Dashboard scoreboard={scoreboard} setScoreboard={setScoreboard} />
    </div>
  );
}

export default App;
