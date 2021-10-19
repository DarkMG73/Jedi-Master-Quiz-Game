import { useContext } from "react";
import styles from "./GameOver.module.css";
import ScoreContext from "../../store/score-context";
import Card from "../UI/Card/Card";
import Score from "../Score/Score";
import Backdrop from "../UI/Backdrop/Backdrop";

function GameOver(props) {
  const scoreCtx = useContext(ScoreContext);
  console.log("BEGIN GAMEOVER scoreCtx: ", scoreCtx);

  const restartHandler = () => {
    scoreCtx.resetScoreContext();
    props.setGameOver(false);
  };

  return (
    <div className={styles["gameover-wrap"]}>
      <Card>
        <div id="gameover-container" className={styles["gameover-container"]}>
          <h3>GameOver</h3>
          <Score
            totalQuestionNumber={props.totalQuestionNumber}
            gameOver={props.gameOver}
            setGameOver={props.setGameOver}
          />
          <button onClick={restartHandler}>Let's Play Again! &rarr;</button>
        </div>
      </Card>
    </div>
  );
}
export default GameOver;
