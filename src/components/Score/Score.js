import { useContext, useEffect, useState } from "react";
import ScoreContext from "../../store/score-context";
import Card from "../UI/Card/Card";
import JediCrest from "../UI/JediCrest";
import Lightsaber from "../Lightsaber/Lightsaber";
import Ranks from "../Ranks/Ranks";
import classes from "./Score.module.css";
import { getRandomInt } from "../../hooks/utilities";

function Score(props) {
  const [lightsaberAnimationClass, setLightsaberAnimationClass] = useState();
  const scoreCtx = useContext(ScoreContext);
  const correct = scoreCtx.correct.length;
  const incorrect = scoreCtx.incorrect.length;
  const totalQuestionNumber = props.totalQuestionNumber;
  const setGameOver = props.setGameOver;
  const gameOver = props.gameOver;
  const skillLevelMod = props.skillLevelMod ?? 1;

  console.log("%c--- BEGIN SCORE ---", "background: purple;color:white");
  console.log("%cscoreCtx: ", "background:purple, color:white", scoreCtx);

  /****************** 
     Calculate Rank
  ******************/
  const rating = ((correct / totalQuestionNumber) * 100).toFixed(0);
  let ratingWithRankModifiers = totalQuestionNumber
    ? rating * skillLevelMod
    : 0;
  ratingWithRankModifiers =
    ratingWithRankModifiers <= 100 ? ratingWithRankModifiers : 100;
  let currentKnowledgeLevel;

  if (ratingWithRankModifiers != undefined && ratingWithRankModifiers < 100) {
    currentKnowledgeLevel = Ranks.filter(
      (rank) => ratingWithRankModifiers <= rank.threshold
    );
  } else {
    currentKnowledgeLevel = Ranks.slice(-1);
  }

  // If current rank exceeds Ranks array, assign top rank.
  if (!currentKnowledgeLevel) currentKnowledgeLevel = Ranks;

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
      console.log("--- GAME MARKED AS FINISHED ---: ");
      console.log("isTopLevelReached: ", isTopLevelReached);
      console.log("areQuestionsDepleted: ", areQuestionsDepleted);
      console.log("currentKnowledgeLevel[0]: ", currentKnowledgeLevel[0]);
      console.log("correct + incorrect: ", correct + incorrect);
      console.log("totalQuestionNumber: ", totalQuestionNumber);
      console.log("ratingWithRankModifiers: ", ratingWithRankModifiers);
      console.log("-----------------------------");
      setGameOver(true);
    }
  }, [areQuestionsDepleted, isTopLevelReached]);
  /******************** */

  /****************** 
  Random ID to force 
  refresh of component & 
  possibly run new animation.
  ******************/
  function genNewClass(initial, prefix, modifier) {
    let newClass = prefix + modifier;
    return newClass;
  }
  useEffect(() => {
    // Only run animation only X % of the time (decreasing over time)
    if (getRandomInt(100) > ratingWithRankModifiers) {
      const newClass = genNewClass(
        lightsaberAnimationClass,
        "ls-animation",
        getRandomInt(7)
      );
      setLightsaberAnimationClass(newClass);
    }
  }, [correct, setLightsaberAnimationClass]);
  return (
    <div className={classes["score-outer-wrap"]}>
      <Card>
        <div className={classes["score-container"]}>
          <div className={classes["score-wrap"]}>
            <div
              className={
                classes["subsection-title"] +
                " " +
                (gameOver && classes["gameover-subsection-title"])
              }
            >
              Score
            </div>
            <div
              className={
                classes["subsection-text"] +
                " " +
                (gameOver && classes["gameover-subsection-text"])
              }
            >
              {scoreCtx.correct.length} right{" "}
              {!gameOver && <span>&nbsp; &nbsp;|&nbsp; &nbsp;</span>}
              {gameOver && <br />}
              {scoreCtx.incorrect.length} wrong
            </div>
          </div>

          {!gameOver && (
            <div className={classes["progress-wrap"]}>
              <div className={classes["progress-data"]}>
                <div className={classes["subsection-title"]}>Jedi Path</div>
                <div className={classes["subsection-text"]}>
                  Progress: {ratingWithRankModifiers}%
                </div>
              </div>
              <div
                key={"lsOne-" + lightsaberAnimationClass}
                className={
                  classes["lightsaber-wrap"] +
                  " " +
                  classes[lightsaberAnimationClass]
                }
                style={{ left: 61 - ratingWithRankModifiers + "%" }}
              >
                <Lightsaber
                  length={ratingWithRankModifiers}
                  rotation="90"
                  transformOrigin="center"
                />
              </div>
            </div>
          )}

          {gameOver && (
            <div className={classes["gameover-score-wrap"]}>
              <div className={classes["gameover-logo"]}>
                <JediCrest />
              </div>

              <div
                className={classes["lightsaber-wrap"]}
                style={{
                  left: "-75%",
                  top: "50%",
                }}
              >
                <Lightsaber
                  length={ratingWithRankModifiers}
                  rotation="63"
                  transformOrigin="top right"
                />
                <div
                  className={classes["lightsaber-wrap"]}
                  style={{
                    right: "-125%",
                    top: "-10px",
                  }}
                >
                  <Lightsaber
                    length={ratingWithRankModifiers}
                    rotation="297"
                    transformOrigin="top left"
                  />
                </div>
              </div>
              {ratingWithRankModifiers >= 100 && (
                <div className={classes["gameover-messsage"]}>
                  Victory is yours! You have earned the coveted rank of
                  {Ranks[Ranks.length - 1].rank}!
                </div>
              )}

              {ratingWithRankModifiers < 100 && (
                <div
                  className={
                    classes["gameover-messsage"] +
                    " " +
                    classes["gameover-fail"]
                  }
                >
                  Failed, you have to reach the coveted Jedi Grand Master Rank!
                  Only worthy of a {currentRank}, you are! More training and
                  study you need, young one.
                </div>
              )}
            </div>
          )}

          <div className={classes["kowledge-rank-wrap"]}>
            <div className={classes["current-knowledge-rank"]}>
              <div className={classes["subsection-title"]}>
                Jedi Knowledge Rank
              </div>
              <div className={classes["subsection-text"]}>
                <div className={classes[currentPosition]}>{currentRank}</div>
              </div>
            </div>
          </div>

          {!gameOver && (
            <div className={classes["reset-button-wrap"]}>
              <Card>
                <button
                  className={classes["restart-game-btn"]}
                  onClick={restartGameBtnHandler}
                >
                  Restart Game
                </button>
              </Card>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Score;
