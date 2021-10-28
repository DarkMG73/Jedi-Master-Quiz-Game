import { getRandomInt, shuffleArray } from "./utilities";

export function createAnswerOptions(
  allQuestions,
  answer,
  answerOptions,
  photoOptions,
  answerExplanation,
  scoreCtx,
  startTimer
) {
  const availableSpeakers = [];
  for (const key in allQuestions) {
    if (
      answer !== allQuestions[key].answer &&
      allQuestions[key].answer &&
      allQuestions[key].answer != ""
    ) {
      availableSpeakers.push(allQuestions[key].answer);
    }
  }
  console.log("answer: ", answer);
  function twoUniqueRandomNumbers(highestLimit) {
    let randomOne = getRandomInt(highestLimit);
    let randomTwo = getRandomInt(highestLimit);

    // Ensure different number
    let limitCnt = 0;

    while (limitCnt < 10 && highestLimit > 0 && randomOne === randomTwo) {
      randomOne = getRandomInt(highestLimit);

      randomTwo = getRandomInt(highestLimit);

      limitCnt++;
    }
    return [randomOne, randomTwo];
  }

  let randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);

  // Ensure different name
  let limitCnt = 0;

  while (
    limitCnt < 1000 &&
    availableSpeakers.length > 0 &&
    availableSpeakers[randomNumbers[0]] === availableSpeakers[randomNumbers[1]]
  ) {
    randomNumbers = twoUniqueRandomNumbers(availableSpeakers.length);
    limitCnt++;
  }

  let allPhotoOptions = {};
  if (photoOptions) {
    allPhotoOptions = {
      photoOptionOne: photoOptions[1]
        ? photoOptions[1]
        : availableSpeakers[randomNumbers[0]],
      photoOptionTwo: photoOptions[2]
        ? photoOptions[2]
        : availableSpeakers[randomNumbers[1]],
      photoOptionThree: photoOptions[0] ? photoOptions[0] : answer,
    };
  } else {
    allPhotoOptions = {
      photoOptionOne: availableSpeakers[randomNumbers[0]],
      photoOptionTwo: availableSpeakers[randomNumbers[1]],
      photoOptionThree: answer,
    };
  }

  let allAnswerOptions = {};

  if (answerOptions) {
    allAnswerOptions = {
      answerOptionOne: answerOptions[0]
        ? answerOptions[0]
        : availableSpeakers[randomNumbers[0]],
      answerOptionTwo: answerOptions[1]
        ? answerOptions[1]
        : availableSpeakers[randomNumbers[1]],
    };
  } else {
    allAnswerOptions = {
      answerOptionOne: availableSpeakers[randomNumbers[0]],
      answerOptionTwo: availableSpeakers[randomNumbers[1]],
    };
  }

  console.log("availableSpeakers: ", availableSpeakers);
  console.log("randomNumbers: ", randomNumbers);
  console.log("OPTIONS-HOOKS answerOptions: ", answerOptions);
  console.log("photoOptions: ", photoOptions);
  console.log(
    "availableSpeakers[randomNumbers[0]]: ",

    availableSpeakers[randomNumbers[0]]
  );
  console.log(
    "availableSpeakers[randomNumbers[1]]: ",
    availableSpeakers[randomNumbers[1]]
  );

  console.log("availableSpeakers: ", availableSpeakers);
  const dupsRemoved = [...new Set(availableSpeakers)];
  console.log("*******dupsRemoved: ", dupsRemoved);

  console.log("allAnswerOptions: ", allAnswerOptions);

  let optionsArray = [
    {
      answer: allAnswerOptions.answerOptionOne,
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
      photo: allPhotoOptions.photoOptionOne,
    },
    {
      answer: allAnswerOptions.answerOptionTwo,
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
      photo: allPhotoOptions.photoOptionTwo,
    },
    {
      answer: answer,
      handler: scoreCtx.addCorrect,
      class: "correct",
      photo: allPhotoOptions.photoOptionThree,
      answerExplanation,
    },
  ];

  shuffleArray(optionsArray);
  return [...optionsArray];
}
