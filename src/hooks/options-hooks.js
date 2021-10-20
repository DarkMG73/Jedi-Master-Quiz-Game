import { getRandomInt, shuffleArray } from "./utilities";

export function createAnswerOptions(allQuotes, answer, scoreCtx, startTimer) {
  console.log("createAnswerOptions: ", allQuotes, answer, scoreCtx, startTimer);
  const availableSpeakers = [];
  for (const key in allQuotes) {
    if (answer !== allQuotes[key].speaker) {
      console.log("allQuotes[key]: ", allQuotes[key]);
      availableSpeakers.push(allQuotes[key].speaker);
    }
  }

  console.log("availableSpeakers: ", availableSpeakers);

  function twoUniqueRandomNumbers(highestLimit) {
    console.log("highestLimit: ", highestLimit);
    let randomOne = getRandomInt(highestLimit);
    let randomTwo = getRandomInt(highestLimit);

    // Ensure different number
    let limitCnt = 0;
    console.log("limitCnt < 1000: ", limitCnt < 1000);
    while (limitCnt < 10 && highestLimit > 0 && randomOne === randomTwo) {
      randomOne = getRandomInt(highestLimit);
      console.log("randomOne: ", randomOne);
      randomTwo = getRandomInt(highestLimit);
      console.log("randomTwo: ", randomTwo);
      limitCnt++;
      console.log("limitCnt: ", limitCnt);
    }
    return [randomOne, randomTwo];
  }

  let randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);
  console.log("randomNumbers: ", randomNumbers);

  // Ensure different name
  console.log("availableSpeakers.length > 0 : ", availableSpeakers.length > 0);
  console.log(
    "availableSpeakers[randomNumbers[0]] === availableSpeakers[randomNumbers[1]: ",
    availableSpeakers[randomNumbers[0]] === availableSpeakers[randomNumbers[1]]
  );
  console.log(
    "availableSpeakers[randomNumbers[0]]: ",
    availableSpeakers[randomNumbers[0]]
  );
  let limitCnt = 0;
  console.log("limitCnt < 1000: ", limitCnt < 1000);
  while (
    limitCnt < 1000 &&
    availableSpeakers.length > 0 &&
    availableSpeakers[randomNumbers[0]] === availableSpeakers[randomNumbers[1]]
  ) {
    console.log("randomNumbers: ", randomNumbers);
    limitCnt++;
    randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);
    console.log("randomNumbers: ", randomNumbers);
    limitCnt++;
  }

  console.log("limitCnt < 1000: ", limitCnt < 1000);

  let optionsArray = [
    {
      answer: availableSpeakers[randomNumbers[0]],
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
    },
    {
      answer: availableSpeakers[randomNumbers[1]],
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
    },
    { answer: answer, handler: scoreCtx.addCorrect, class: "correct" },
  ];

  shuffleArray(optionsArray);
  return [...optionsArray];
}
