import React from "react";

const Display = props => {
  const { ball, strike } = props.scoreboard;
  return (
    <div>
      <p>
        Balls: <span data-testid="display-ball">{ball}</span>
      </p>
      <p>
        Strikes: <span data-testid="display-strike">{strike}</span>
      </p>
    </div>
  );
};

export default Display;
