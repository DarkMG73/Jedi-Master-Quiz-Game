import { useState, useEffect } from "react";
import Card from "../UI/Card";
import { quoteList } from "../../store/quotes";
import { getQuote, splitQuoteAndAuthor } from "../../hooks/quote-hooks";
import { getRandomInt } from "../../hooks/utilities";

function Question() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const [score, setScore] = useState([]);
  // console.log("RUNNING Question");

  useEffect(() => {
    async function getAllQuotes() {
      const fetchedQuotes = await quoteList();

      // console.log("FETCHED RESULTS", fetchedQuotes);
      setAllQuotes(fetchedQuotes);
    }
    getAllQuotes();
  }, []);

  useEffect(() => {
    getQuote(
      allQuotes["allFetchedQuotesIds"],
      allQuotes["allFetchedQuotes"],
      score,
      setScore,
      setQuote
    );
  }, [allQuotes]);

  const newQuoteHandler = function () {
    getQuote(
      allQuotes["allFetchedQuotesIds"],
      allQuotes["allFetchedQuotes"],
      score,
      setScore,
      setQuote
    );
  };
  // console.log("QUOTE: ", quote[getRandomInt(quote)]);
  // console.log("QUOTE LENGTH: ", quote[quote["allQuotesIds"].length]);
  // console.log("FINAL allQuotes: ", allQuotes);
  // console.log("Final QUOTE: ", quote);
  // console.log("Final SCORE: ", score);

  return (
    <Card>
      {quote && (
        <p>
          Quote:{quote.quote} <br /> Speaker:{quote.speaker}
        </p>
      )}

      <button onClick={newQuoteHandler}>New Quote</button>
    </Card>
  );
}

export default Question;
