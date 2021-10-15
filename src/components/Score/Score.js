import { useContext, useEffect, useState } from "react";
import ScoreContext from "../../store/score-context";
import Card from "../UI/Card/Card";
// import jediCrest from "../../assets/images/jedi-crest.png";
import jediCrest from "../../assets/svg/JediCrest";
import Lightsaber from "../Lightsaber/Lightsaber";
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
  const skillLevelMod = props.skillLevelMod ?? 2;
  const ranks = [
    { position: "pos-1", rank: "Youngling", threshold: 20 },
    { position: "pos-2", rank: "Padawan", threshold: 40 },
    { position: "pos-3", rank: "Jedi Knight", threshold: 50 },
    { position: "pos-4", rank: "Jedi Master", threshold: 60 },
    { position: "pos-5", rank: "Jedi Council Member", threshold: 85 },
    { position: "pos-6", rank: "Master of the Order", threshold: 99 },
    { position: "pos-7", rank: "Jedi Grand Master", threshold: 100 },
  ];

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
    console.log("lightsaberAnimationClass: ", lightsaberAnimationClass);
  }, [correct, setLightsaberAnimationClass]);
  return (
    <div className={classes["score-outer-wrap"]}>
      <Card>
        <div className={classes["score-container"]}>
          <div className={classes["score-wrap"]}>
            <div className={classes["subsection-title"]}>Score</div>
            <div className={classes["subsection-text"]}>
              {scoreCtx.correct.length} right &nbsp; &nbsp;|&nbsp; &nbsp;
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
                style={{ left: 61 - ratingWithRankModifiers - 10 + "%" }}
              >
                <Lightsaber
                  length={ratingWithRankModifiers + 10}
                  rotation="90"
                  transformOrigin="center"
                />
              </div>
            </div>
          )}

          {gameOver && (
            <div className={classes["gameover-score-wrap"]}>
              <div className={classes["gameover-logo"]}>{jediCrest}</div>

              <div
                className={classes["lightsaber-wrap"]}
                style={{
                  left: "-75%",
                  top: "47px",
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
                  {ranks[ranks.length - 1].rank}!
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
                {" "}
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
