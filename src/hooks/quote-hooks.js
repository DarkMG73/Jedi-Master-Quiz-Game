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
  const selectedQuote = allFetchedQuotes
    ? splitQuoteAndAuthor(allFetchedQuotes[selectedId].content)
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
    usedId &&
    usedId.length > 0 &&
    typeof usedId !== "undefined" &&
    usedId !== "" &&
    usedId !== " "
  ) {
    console.log("SETTING SCORE STATE", usedId);
    setScore([...score, usedId.toString()]);
  }
  // console.log("Setting quote state.");
  setQuote(selectedQuote);
}
