import { quoteList } from "../store/quotes";
import { randomQuestionsList } from "../store/random-questions";
import { createAnswerOptions } from "./options-hooks";

export function splitQuoteAndAuthor(str) {
  let questionText = str.split("—").shift().trim();
  let answer = str.split("—").pop().trim();

  // The following accomodates inconsistencies in the API's quote format
  if (questionText.length === str.length || answer.length === str.length) {
    questionText = str.split("- ").shift().trim();
    answer = str.split("- ").pop().trim();
    if (questionText.length === str.length || answer.length === str.length) {
      questionText = str.split(" ? ").shift().trim();
      answer = str.split(" ? ").pop().trim();
    }
  }

  // Occasionally the API returns two names. Omit and rerun if so
  // if (questionText.includes("[")) {
  //   alert("***   CONTAINS A BRACKET!!!!!!   ***");
  //
  //   return null;
  // }

  return {
    questionText,
    answer,
  };
}

const arrayToObject = (arr, key) => {
  console.log("|||||||||||||||");
  console.log("key: ", key);
  console.log("arr: ", arr);
  let cntr = 0;
  const res = {};
  arr.forEach((obj) => {
    console.log("obj: ", obj);
    res[cntr] = obj;
    cntr++;
  });
  return res;
};

const combineQuestionObjsToArray = (obj1, obj2) => {
  console.log("-----------------");
  console.log("obj2: ", obj2);
  console.log("obj1: ", obj1);
  const combinedObj = {};
  let cntr = 0;
  for (const key in obj1) {
    obj1[key].id = cntr;
    combinedObj[cntr] = obj1[key];
    console.log("combinedObj[cntr] : ", combinedObj[cntr]);
    cntr++;
  }

  for (const key in obj2) {
    obj2[key].id = cntr;
    combinedObj[cntr] = obj2[key];
    cntr++;
  }

  return combinedObj;
};

export async function getAllQuestions(setAllQuestions, setTotalQuestionNumber) {
  // Grab quotes
  let fetchedQuotes = await quoteList();

  const allSiftedQuotes = {};
  for (const quote of fetchedQuotes.allFetchedQuotes) {
    const { questionText, ...restOfQuote } = quote;
    allSiftedQuotes[quote.id] = {
      ...splitQuoteAndAuthor(questionText),
      ...restOfQuote,
    };
  }

  //Grab all other questions.
  const fetchedQuestions = randomQuestionsList();
  console.log(
    '"*** getAllQuestions 1-B - fetchedQuestions: ',
    fetchedQuestions.allFetchedQuestions
  );
  console.log(
    "arrayToObject(fetchedQuestions.allFetchedQuestions): ",
    arrayToObject(fetchedQuestions.allFetchedQuestions, "id", "rand_ques")
  );
  const allSiftedQuestions = arrayToObject(
    fetchedQuestions.allFetchedQuestions,
    "id"
  );

  //Compile the above.
  const allQuestions = combineQuestionObjsToArray(
    allSiftedQuestions,
    allSiftedQuotes
  );

  let allIds = [
    ...fetchedQuotes.allFetchedQuotesIds,
    ...fetchedQuestions.allFetchedQuestionIds,
  ];

  allIds = [...new Array(allIds.length).keys()];

  const AllQuestionsAndIds = {
    allFetchedQuestionsIds: allIds,
    allFetchedQuestions: allQuestions,
  };

  console.log(
    "fetchedQuestions.allFetchedQuestions: ",
    fetchedQuestions.allFetchedQuestions
  );
  console.log("AllQuestionsAndIds: ", AllQuestionsAndIds);
  setTotalQuestionNumber(allIds.length);
  setAllQuestions(AllQuestionsAndIds);
}

export function getQuestion(
  allFetchedQuestionsIds,
  allFetchedQuestions,
  scoreCtx,
  setQuestion
) {
  const totalQuestions = allFetchedQuestionsIds
    ? allFetchedQuestionsIds.length
    : 0;
  const selectedId = Math.floor(Math.random() * totalQuestions);
  const CurrentIdList = allFetchedQuestionsIds ? allFetchedQuestionsIds : [];
  const scoreRecord = [...scoreCtx.incorrect, ...scoreCtx.correct];

  let usedId;

  // If we do not have questoins, use the selcted ID
  if (totalQuestions > 0) usedId = CurrentIdList[selectedId];

  // Check if ID has already been used
  if (usedId) {
    console.log(
      "scoreRecord.includes(usedId.toString()): ",
      scoreRecord.includes(usedId.toString())
    );
  }
  if (usedId && scoreRecord.includes(usedId.toString())) {
    // Check if we are out of questions
    console.log(
      "scoreRecord.length >= totalQuestions: ",
      scoreRecord.length >= totalQuestions
    );
    if (totalQuestions > 0 && scoreRecord.length >= totalQuestions) {
      return "QUOTES_DEPLETED";
    }
    // If the ID was used and we have questions, re-run

    getQuestion(
      allFetchedQuestionsIds,
      allFetchedQuestions,
      scoreCtx,
      setQuestion
    );
    return;
  }
  // If all questions have been used, return

  const selectedQuestion = allFetchedQuestions
    ? { ...allFetchedQuestions[usedId] }
    : { questionText: "Are you ready?", answer: "" };

  if (!selectedQuestion) {
    getQuestion(
      allFetchedQuestionsIds,
      allFetchedQuestions,
      scoreCtx,
      setQuestion
    );
  }

  if (
    scoreRecord &&
    totalQuestions > 0 &&
    usedId &&
    typeof usedId !== "undefined" &&
    usedId !== "" &&
    usedId !== " "
  ) {
    scoreCtx.addCurrent(usedId.toString());
    console.log("selectedQuestion: ", selectedQuestion);
    const finalAnswer =
      selectedQuestion.answer != ""
        ? selectedQuestion.answer
        : selectedQuestion.answerNotPerson;
    console.log("finalAnswer: ", finalAnswer);
    selectedQuestion.answerOptions = createAnswerOptions(
      allFetchedQuestions,
      finalAnswer,
      selectedQuestion.answerOptions,
      selectedQuestion.photoOptions,
      scoreCtx
    );
    setQuestion(selectedQuestion);
  } else {
  }
}
