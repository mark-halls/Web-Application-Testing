import React from "react";

const Display = props => {
  const { ball, strike } = props.scoreboard;
  return (
    <div>
      <p>Balls: {ball}</p>
      <p>Strikes: {strike}</p>
    </div>
  );
};

export default Display;
