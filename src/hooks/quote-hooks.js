import { quoteList } from "../store/quotes";

export function splitQuoteAndAuthor(str) {
  let quote = str.split("—").shift().trim();
  let speaker = str.split("—").pop().trim();

  // The following accomodates inconsistencies in the API's quote format
  if (quote.length === str.length || speaker.length === str.length) {
    quote = str.split("- ").shift().trim();
    speaker = str.split("- ").pop().trim();
    if (quote.length === str.length || speaker.length === str.length) {
      quote = str.split(" ? ").shift().trim();
      speaker = str.split(" ? ").pop().trim();
    }
  }

  // Occasionally the API returns two speaker. Omit and rerun if so
  // if (quote.includes("[")) {
  //   alert("***   CONTAINS A BRACKET!!!!!!   ***");
  //   console.log("***   CONTAINS A BRACKET!!!!!!   ***");
  //   return null;
  // }

  return {
    quote,
    speaker,
  };
}

export async function getAllQuotes(setAllQuotes) {
  const fetchedQuotes = await quoteList();
  console.log("fetchedQuotes", fetchedQuotes.allFetchedQuotes);
  const allSiftedQuotes = {};
  for (const quote of fetchedQuotes.allFetchedQuotes) {
    console.log("SIFTED QUOTE", quote);
    allSiftedQuotes[quote.id] = {
      ...splitQuoteAndAuthor(quote.content),
      faction: quote.faction,
    };
  }

  setAllQuotes({
    allFetchedQuotesIds: fetchedQuotes.allFetchedQuotesIds,
    allFetchedQuotes: allSiftedQuotes,
  });
  console.log("allSiftedQuotes", allSiftedQuotes);
}

export function getQuote(
  allFetchedQuotesIds,
  allFetchedQuotes,
  score,
  setScore,
  setQuote
) {
  const totalQuotes = allFetchedQuotesIds ? allFetchedQuotesIds.length : 0;
  const selectedId = Math.floor(Math.random() * totalQuotes);
  const CurrentIdList = allFetchedQuotesIds ? allFetchedQuotesIds : [];

  console.log("totalQuotes", totalQuotes);
  let usedId;
  console.log("CurrentIdList", CurrentIdList);
  if (totalQuotes > 0) usedId = CurrentIdList[selectedId];

  if (usedId && score.includes(usedId.toString())) {
    console.log("*** ID ALREADY USED ****");
    if (totalQuotes > 0 && score.length >= totalQuotes) {
      console.log("SHOULD BE THE END");
      return "QUOTES_DEPLETED";
    }
    console.log("*** Repeat getQuote() ****");
    getQuote(allFetchedQuotesIds, allFetchedQuotes, score, setScore, setQuote);
    return;
  }
  // If all quotes have been used, return
  const selectedQuote = allFetchedQuotes
    ? { ...allFetchedQuotes[usedId] }
    : { quote: "Are you ready?", speaker: "" };

  if (!selectedQuote) {
    getQuote();
  }

  if (
    score &&
    totalQuotes > 0 &&
    usedId &&
    typeof usedId !== "undefined" &&
    usedId !== "" &&
    usedId !== " "
  ) {
    console.log("SETTING SCORE STATE", usedId);
    setScore([...score, usedId.toString()]);
    console.log("score", score);

    console.log("Setting quote state.");
    setQuote(selectedQuote);
  } else {
  }
}
