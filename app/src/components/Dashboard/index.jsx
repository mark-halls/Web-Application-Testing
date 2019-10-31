import React, { useCallback } from "react";

const Dashboard = ({ scoreboard, setScoreboard }) => {
  const strike = useCallback(() => {
    const strikes = scoreboard.strike++;
    if (strikes >= 3) {
      setScoreboard({ ...scoreboard, ball: 0, strike: 0 });
    } else {
      setScoreboard({ ...scoreboard, strike: strikes });
    }
  }, [scoreboard, setScoreboard]);

  const ball = useCallback(() => {
    const balls = scoreboard.ball++;
    if (balls >= 4) {
      setScoreboard({ ...scoreboard, ball: 0, strike: 0 });
    } else {
      setScoreboard({ ...scoreboard, ball: balls });
    }
  }, [scoreboard, setScoreboard]);

  const foul = useCallback(() => {
    if (scoreboard.strike < 1) {
      setScoreboard({ ...scoreboard, strike: 1 });
    } else if (scoreboard.strike === 1) {
      setScoreboard({ ...scoreboard, strike: 2 });
    }
  }, [scoreboard, setScoreboard]);

  const hit = useCallback(
    () => setScoreboard({ ...scoreboard, ball: 0, strike: 0 }),
    [scoreboard, setScoreboard]
  );

  return (
    <>
      <button onClick={strike}>Strike</button>
      <button onClick={ball}>Ball</button>
      <button onClick={foul}>Foul</button>
      <button onClick={hit}>Hit</button>
    </>
  );
};

export default Dashboard;
