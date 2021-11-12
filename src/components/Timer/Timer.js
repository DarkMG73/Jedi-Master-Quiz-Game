import { useState, useEffect, useContext } from "react";
import classes from "./Timer.module.css";
import ScoreContext from "../../store/score-context";

function Timer(props) {
  const scoreCtx = useContext(ScoreContext);
  const [timeCounter, setTimeCounter] = useState(Number(scoreCtx.timerLength));
  const timerRunning = scoreCtx.timerRunning;
  const setTimerRunning = scoreCtx.setTimerRunning;
  const addIncorrect = scoreCtx.addIncorrect;

  useEffect(() => {
    let timerInterval;
    if (timerRunning) {
      props.passTimerStarted(true);
      timerInterval = setInterval(() => {
        setTimeCounter((timeCounter) => timeCounter - 1);
      }, 1000);
      return () => clearInterval(timerInterval);
    } else {
      props.passTimerStarted(false);
    }
  }, [timerRunning]);

  useEffect(() => {
    if (timeCounter <= 0) {
      setTimerRunning(false);

      addIncorrect();
    }
  }, [timeCounter]);

  useEffect(() => {
    if (timerRunning) {
      setTimeCounter(Number(scoreCtx.timerLength));
      console.log("scoreCtx.timerLength: ", scoreCtx.timerLength);
    }
  }, [timerRunning]);

  return (
    <div className={classes.timer + " " + classes.container}>
      <div className="time">
        <span className="second">{timeCounter}</span>
      </div>
    </div>
  );
}

export default Timer;
