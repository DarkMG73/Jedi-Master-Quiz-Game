import { getRandomInt, shuffleArray } from "./utilities";

export function createAnswerOptions(allQuotes, answer, scoreCtx, startTimer) {
  const availableSpeakers = [];
  for (const key in allQuotes) {
    if (answer !== allQuotes[key].speaker) {
      availableSpeakers.push(allQuotes[key].speaker);
    }
  }

  function twoUniqueRandomNumbers(highestLimit) {
    let randomOne = getRandomInt(highestLimit);
    let randomTwo = getRandomInt(highestLimit);

    // Ensure different number
    while (highestLimit > 0 && randomOne === randomTwo) {
      randomOne = getRandomInt(highestLimit);
      randomTwo = getRandomInt(highestLimit);
    }
    return [randomOne, randomTwo];
  }

  let randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);

  // Ensure different name
  while (
    availableSpeakers.length > 0 &&
    availableSpeakers[randomNumbers[0]] === availableSpeakers[randomNumbers[1]]
  ) {
    randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);
  }
  let optionsArray = [
    {
      answer: availableSpeakers[randomNumbers[0]],
      handler: scoreCtx.addIncorrect,
    },
    {
      answer: availableSpeakers[randomNumbers[1]],
      handler: scoreCtx.addIncorrect,
    },
    { answer: answer, handler: scoreCtx.addCorrect },
  ];

  shuffleArray(optionsArray);
  return [...optionsArray];
}
