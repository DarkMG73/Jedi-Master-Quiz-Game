import { useState, useEffect } from "react";
import classes from "./Question.module.css";
import Card from "../UI/Card";
import { getAllQuotes, getQuote } from "../../hooks/quote-hooks";
import Options from "../Options/Options";

function Question() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const [score, setScore] = useState([]);
  const [gameRunning, setGameRunning] = useState(true);
  const quoteArgs = [
    allQuotes["allFetchedQuotesIds"],
    allQuotes["allFetchedQuotes"],
    score,
    setScore,
    setQuote,
  ];

  useEffect(() => {
    getAllQuotes(setAllQuotes);
  }, []);

  useEffect(() => {
    getQuote(...quoteArgs);
  }, [allQuotes]);
  console.log("allQuotes", allQuotes);
  const newQuoteHandler = function () {
    const endOutput = getQuote(...quoteArgs);
    if (endOutput === "QUOTES_DEPLETED") setGameRunning(false);
  };
  console.log("quote", quote);
  return (
    <Card>
      {quote && gameRunning && (
        <div className={classes["quote-container"]}>
          <p>
            Quote:{quote.quote} <br /> Speaker:{quote.speaker}
          </p>
          <Options
            answer={quote.speaker}
            allQuotes={allQuotes.allFetchedQuotes}
            set
          />
        </div>
      )}
      {!gameRunning && <p>You have answered all of the questions!</p>}

      <button onClick={newQuoteHandler}>New Quote</button>
    </Card>
  );
}

export default Question;
