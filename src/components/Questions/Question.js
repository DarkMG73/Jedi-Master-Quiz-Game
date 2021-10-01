import { useState, useEffect } from "react";
import Card from "../UI/Card";
import { quoteList } from "../../store/quotes";
import { splitQuoteAndAuthor } from "../../hooks/quote-hooks";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Question() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState([]);
  const [score, setScore] = useState([]);
  // console.log("RUNNING Question");

  function getQuote() {
    // console.log("getQuote() allQuotes: ", allQuotes);
    // console.log(
    //   "getQuote() allFetchedQuotesIds: ",
    //   allQuotes["allFetchedQuotesIds"]
    // );
    const totalQuotes = allQuotes["allFetchedQuotesIds"]
      ? allQuotes["allFetchedQuotesIds"].length
      : 0;
    const selectedId = getRandomInt(totalQuotes);
    const CurrentIdList = allQuotes["allFetchedQuotesIds"]
      ? allQuotes["allFetchedQuotesIds"]
      : [];
    console.log("totalQuotes", totalQuotes);
    let usedId;
    console.log("CurrentIdList", CurrentIdList);
    if (totalQuotes > 0) {
      console.log("SETTING USEDID --->", selectedId);
      usedId = CurrentIdList[selectedId];
      console.log("SETTING USEDID --->", usedId);
    }
    console.log("score", score);
    console.log("selectedId", selectedId);
    console.log(
      "*** score.includes(+selectedId)****",
      score.includes(selectedId.toString())
    );
    if (score.includes(selectedId.toString())) {
      console.log("*** ID ALREADY USED ****");
      if (totalQuotes > 0 && usedId.length >= totalQuotes) {
        console.log("SHOULD BE THE END");
        return "QUOTES_DEPLETED";
      }
      console.log(
        "*** Made it past totalQuotes > 0 && usedId.length >= totalQuotes ****"
      );
      getQuote();
      return;
    }
    // If all quotes have been used, return
    const selectedQuote = allQuotes["allFetchedQuotes"]
      ? splitQuoteAndAuthor(allQuotes["allFetchedQuotes"][selectedId].content)
      : "Are you ready?";

    if (!selectedQuote) {
      getQuote();
    }

    console.log("totalQuotes---->", totalQuotes);
    console.log("usedId---->", usedId);
    console.log("totalQuotes > 0---->", totalQuotes > 0);
    if (usedId) console.log(" usedId.length > 0---->", usedId.length > 0);
    console.log(
      "typeof usedId !== 'undefined'---->",
      typeof usedId !== "undefined"
    );
    console.log("usedId", usedId);
    console.log("usedId !== ''---->", usedId !== "");
    console.log("usedId !== ' '---->", usedId !== " ");

    if (
      score &&
      totalQuotes > 0 &&
      usedId.length > 0 &&
      typeof usedId !== "undefined" &&
      usedId &&
      usedId !== "" &&
      usedId !== " "
    ) {
      console.log("SETTING SCORE STATE", usedId);
      setScore([...score, usedId.toString()]);
    }
    // console.log("Setting quote state.");
    setQuote(selectedQuote);
  }
  useEffect(() => {
    async function getAllQuotes() {
      const fetchedQuotes = await quoteList();

      // console.log("FETCHED RESULTS", fetchedQuotes);
      setAllQuotes(fetchedQuotes);
    }
    getAllQuotes();
  }, []);

  useEffect(() => {
    getQuote();
  }, [allQuotes]);

  const newQuoteHandler = function () {
    getQuote();
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
