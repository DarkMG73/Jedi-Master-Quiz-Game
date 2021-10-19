import { useState, useEffect, useContext } from "react";
import styles from "./Question.module.css";
import Card from "../UI/Card/Card";
import { getAllQuotes, getQuote } from "../../hooks/quote-hooks";
// import { getAllQuotes } from "../../hooks/HTTP/HTTPRequest"; // re-gather quotes
import Options from "../Options/Options";
import ScoreContext from "../../store/score-context";

function Question(props) {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const setGameRunning = props.setGameRunning;
  const gameRunning = props.gameRunning;
  const scoreCtx = useContext(ScoreContext);
  const setTimerRunning = scoreCtx.setTimerRunning;
  const timerRunning = scoreCtx.timerRunning;
  const gameOver = props.gameOver;

  console.log("*** Question 1 - allQuotes: ", allQuotes);

  const quoteArgs = [
    allQuotes["allFetchedQuotesIds"],
    allQuotes["allFetchedQuotes"],
    scoreCtx,
    setQuote,
  ];
  console.log("*** Question 2 - allQuotes: ", allQuotes);
  console.log("*** Question 3 - quoteArgs: ", quoteArgs);

  useEffect(() => {
    if (gameRunning && !timerRunning) setTimerRunning(true);
  }, [gameRunning]);

  useEffect(() => {
    getAllQuotes(setAllQuotes, props.setTotalQuestionNumber);
  }, []);

  useEffect(() => {
    getQuote(...quoteArgs);
  }, [allQuotes]);

  const newQuoteHandler = function () {
    const endOutput = getQuote(...quoteArgs);
    scoreCtx.setTimerRunning(true);
    if (endOutput === "QUOTES_DEPLETED") setGameRunning(false);
  };

  console.log("quote: ", quote);
  return (
    <div className={styles["questions-container"]}>
      {quote && gameRunning && (
        <div>
          <div className={styles["quote-container"]}>
            <Card>
              <p className={styles["quote-text"]}>
                <span className={styles["quote-prequestion"]}>
                  {quote.preQuestion}
                </span>{" "}
                "{quote.quote}" <br /> Speaker:{quote.speaker}
              </p>
            </Card>
          </div>
          {quote.answerOptions && (
            <Options
              answerOptions={quote.answerOptions}
              timerRunning={timerRunning}
            />
          )}
        </div>
      )}
      {!gameRunning && <p>You have answered all of the questions!</p>}

      {!scoreCtx.timerRunning && !gameOver && (
        <button className={styles.button} onClick={newQuoteHandler}>
          <Card>Next Question</Card>
        </button>
      )}
    </div>
  );
}

export default Question;
