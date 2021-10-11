import { useContext, useEffect } from "react";
import ScoreContext from "../../store/score-context";
import Card from "../UI/Card/Card";
import classes from "./Score.module.css";

function Score(props) {
  const scoreCtx = useContext(ScoreContext);
  const correct = scoreCtx.correct.length;
  const incorrect = scoreCtx.incorrect.length;
  const totalQuestionNumber = props.totalQuestionNumber;
  const setGameOver = props.setGameOver;
  const gameOver = props.gameOver;
  const skillLevelMod = props.skillLevelMod ?? 30;
  const ranks = [
    { position: "pos-1", rank: "Youngling", threshold: 20 },
    { position: "pos-2", rank: "Padawan", threshold: 40 },
    { position: "pos-3", rank: "Jedi Knight", threshold: 70 },
    { position: "pos-4", rank: "Jedi Master", threshold: 80 },
    { position: "pos-5", rank: "Member of the jedi Council", threshold: 90 },
    { position: "pos-6", rank: "Master of the Order", threshold: 95 },
    { position: "pos-7", rank: "Jedi Grand Master", threshold: 100 },
  ];

  /****************** 
     Calculate Rank
  ******************/
  const rating = ((correct / totalQuestionNumber) * 100).toFixed(0);
  const ratingWithRankModifiers = totalQuestionNumber
    ? rating * skillLevelMod
    : 0;

  let currentKnowledgeLevel;

  if (ratingWithRankModifiers != undefined && ratingWithRankModifiers < 100) {
    currentKnowledgeLevel = ranks.filter(
      (rank) => ratingWithRankModifiers <= rank.threshold
    );
  } else {
    currentKnowledgeLevel = ranks.slice(-1);
  }

  // If current rank exceeds ranks array, assign top rank.
  if (!currentKnowledgeLevel) currentKnowledgeLevel = ranks;

  const { rank: currentRank, position: currentPosition } =
    currentKnowledgeLevel[0] && currentKnowledgeLevel[0];

  const areQuestionsDepleted = totalQuestionNumber <= correct + incorrect;
  const isTopLevelReached = currentKnowledgeLevel[0].threshold >= 100;

  /****************** 
  Endgame & Restart 
  ******************/

  const restartGameBtnHandler = () => {
    setGameOver(true);
  };

  useEffect(() => {
    if (areQuestionsDepleted || isTopLevelReached) {
      setGameOver(true);
    }
  }, [areQuestionsDepleted, isTopLevelReached]);
  /******************** */

  return (
    <Card>
      <div className={classes["score-container"]}>
        <p>
          Score: {scoreCtx.correct.length} right {scoreCtx.incorrect.length}{" "}
          wrong
        </p>
        {!gameOver && <p> Next level progress: {ratingWithRankModifiers}%</p>}
        <div className={classes["current-knowledge-rank"]}>
          Jedi Knowledge Rank:
          <div className={classes[currentPosition]}>{currentRank}</div>
        </div>
        {!gameOver && (
          <button
            className={classes["restart-game-btn"]}
            onClick={restartGameBtnHandler}
          >
            Resart Game
          </button>
        )}
      </div>
    </Card>
  );
}

export default Score;
