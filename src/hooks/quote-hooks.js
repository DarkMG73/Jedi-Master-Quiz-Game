import { quoteList } from "../store/quotes";
import { randomQuestionsList } from "../store/random-questions";
import { createAnswerOptions } from "./options-hooks";

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

const arrayToObject = (arr, key) => {
  const res = {};
  arr.forEach((obj) => {
    res[obj[key]] = obj;
  });
  return res;
};

export async function getAllQuotes(setAllQuotes, setTotalQuestionNumber) {
  // Grab quote questions
  let fetchedQuotes = await quoteList();
  console.log("*** getAllQuotes 1 - fetchedQuotes", fetchedQuotes);
  const allSiftedQuotes = {};
  for (const quote of fetchedQuotes.allFetchedQuotes) {
    const { content, ...restOfQuote } = quote;
    allSiftedQuotes[quote.id] = {
      ...splitQuoteAndAuthor(content),
      ...restOfQuote,
    };
  }

  //Grab all other questions.
  const fetchedQuestions = randomQuestionsList();
  console.log(
    '"*** getAllQuotes 1-B - fetchedQuestions: ',
    fetchedQuestions.allFetchedQuestions
  );
  console.log(
    "arrayToObject(fetchedQuestions.allFetchedQuestions): ",
    arrayToObject(fetchedQuestions.allFetchedQuestions, "id")
  );
  const allSiftedQuestons = arrayToObject(
    fetchedQuestions.allFetchedQuestions,
    "id"
  );
  console.log("fetchedQuestions AS OBJECT: ", fetchedQuestions);
  //Compile the above.
  const allIds = [
    ...fetchedQuotes.allFetchedQuotesIds,
    ...fetchedQuestions.allFetchedQuestionIds,
  ];
  const allQuestions = {
    ...allSiftedQuotes,
    ...allSiftedQuestons,
  };
  const AllQuestionsAndIds = {
    allFetchedQuotesIds: allIds,
    allFetchedQuotes: allQuestions,
  };

  console.log(
    "fetchedQuestions.allFetchedQuestions: ",
    fetchedQuestions.allFetchedQuestions
  );

  console.log("allSiftedQuotes: ", allSiftedQuotes);
  console.log("*** getAllQuotes 3 - allIds: ", allIds);
  console.log("*** getAllQuotes 4 - allQuestions: ", allQuestions);
  console.log("*** getAllQuotes 5 - AllQuestionsAndIds: ", AllQuestionsAndIds);

  setTotalQuestionNumber(allIds.length);
  setAllQuotes(AllQuestionsAndIds);
}

export function getQuote(
  allFetchedQuotesIds,
  allFetchedQuotes,
  scoreCtx,
  setQuote
) {
  const totalQuotes = allFetchedQuotesIds ? allFetchedQuotesIds.length : 0;
  const selectedId = Math.floor(Math.random() * totalQuotes);
  const CurrentIdList = allFetchedQuotesIds ? allFetchedQuotesIds : [];
  const scoreRecord = [...scoreCtx.incorrect, ...scoreCtx.correct];
  console.log("/// IN getQuote - allFetchedQuotes: ", allFetchedQuotes);
  let usedId;

  if (totalQuotes > 0) usedId = CurrentIdList[selectedId];
  console.log("/// IN getQuote - totalQuotes: ", totalQuotes);
  console.log("/// IN getQuote - scoreRecord: ", scoreRecord);
  console.log("/// IN getQuote - usedId: ", usedId);
  console.log(
    "usedId && scoreRecord.includes(usedId.toString()): ",
    usedId && scoreRecord.includes(usedId.toString())
  );

  if (usedId && scoreRecord.includes(usedId.toString())) {
    console.log("/// IN *IF* getQuote - usedId: ", usedId);
    console.log("/// IN getQuote - scoreRecord: ", scoreRecord);
    if (totalQuotes > 0 && scoreRecord.length >= totalQuotes) {
      return "QUOTES_DEPLETED";
    }

    getQuote(allFetchedQuotesIds, allFetchedQuotes, scoreCtx, setQuote);
    return;
  }
  // If all quotes have been used, return
  console.log("allFetchedQuotes: ", allFetchedQuotes);
  const selectedQuote = allFetchedQuotes
    ? { ...allFetchedQuotes[usedId] }
    : { quote: "Are you ready?", speaker: "" };
  console.log("selectedQuote: ", selectedQuote);
  console.log("!selectedQuote: ", !selectedQuote);
  if (!selectedQuote) {
    getQuote(allFetchedQuotesIds, allFetchedQuotes, scoreCtx, setQuote);
  }

  if (
    scoreRecord &&
    totalQuotes > 0 &&
    usedId &&
    typeof usedId !== "undefined" &&
    usedId !== "" &&
    usedId !== " "
  ) {
    scoreCtx.addCurrent(usedId.toString());
    console.log("scoreCtx: ", scoreCtx);

    selectedQuote.answerOptions = createAnswerOptions(
      allFetchedQuotes,
      selectedQuote.speaker,
      scoreCtx
    );
    setQuote(selectedQuote);
  } else {
  }
}
