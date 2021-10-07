import { useState, useEffect, useContext } from "react";
import classes from "./Question.module.css";
import Card from "../UI/Card/Card";
import { getAllQuotes, getQuote } from "../../hooks/quote-hooks";
// import { getAllQuotes } from "../../hooks/HTTP/HTTPRequest"; // re-gather quotes
import Options from "../Options/Options";
import ScoreContext from "../../store/score-context";
import Timer from "../Timer/Timer";

function Question(props) {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const setGameRunning = props.setGameRunning;
  const gameRunning = props.gameRunning;

  const scoreCtx = useContext(ScoreContext);
  const setTimerRunning = scoreCtx.setTimerRunning;
  const timerRunning = scoreCtx.timerRunning;
  const gameOver = props.gameOver;
  const quoteArgs = [
    allQuotes["allFetchedQuotesIds"],
    allQuotes["allFetchedQuotes"],
    scoreCtx,
    setQuote,
  ];

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

  return (
    <Card>
      {quote && gameRunning && (
        <div>
          <div className={classes["quote-container"]}>
            <p>
              Quote:{quote.quote} <br /> Speaker:{quote.speaker}
            </p>
            {quote.answerOptions && (
              <Options answerOptions={quote.answerOptions} />
            )}
          </div>
          <Timer />
        </div>
      )}
      {!gameRunning && <p>You have answered all of the questions!</p>}

      {!scoreCtx.timerRunning && !gameOver && (
        <button onClick={newQuoteHandler}>Next Question</button>
      )}
    </Card>
  );
}

export default Question;
