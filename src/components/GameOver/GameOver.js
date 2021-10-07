import { useContext } from "react";
import classes from "./GameOver.module.css";
import ScoreContext from "../../store/score-context";
import Card from "../UI/Card/Card";
import Score from "../Score/Score";
import Backdrop from "../UI/Backdrop/Backdrop";

function GameOver(props) {
  const scoreCtx = useContext(ScoreContext);

  const restartHandler = () => {
    scoreCtx.resetScoreContext();
    props.setGameOver(false);
  };
  return (
    <Backdrop>
      <Card>
        <div id="gameover-container" className={classes.container}>
          <h3>GameOver</h3>
          <Score
            totalQuestionNumber={props.totalQuestionNumber}
            gameOver={props.gameOver}
            setGameOver={props.setGameOver}
          />
          <button onClick={restartHandler}>Let's Play Again!</button>
        </div>
      </Card>
    </Backdrop>
  );
}
export default GameOver;
