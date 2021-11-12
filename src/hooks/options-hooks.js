import { getRandomInt, shuffleArray } from "./utilities";
import { popularStarWarsInfo } from "../store/starWarsInfo";

export function createAnswerOptions(
  allQuestions,
  category,
  answer,
  answerOptions,
  photoOptions,
  answerExplanation,
  scoreCtx,
  startTimer
) {
  console.log(
    "%c--- BEGIN  createAnswerOptions ---",
    "background:green; color:white"
  );
  console.log("%canswer: ", "background:green; color:white", answer);

  let primaryAffiliation = false;
  console.log("category--------> ", category);
  if (category === "characters") {
    popularStarWarsInfo[category].forEach((character) => {
      console.log("character--------> ", character);
      console.log("answer--------> ", answer);
      if (character.name === answer)
        primaryAffiliation = character.primaryAffiliation;
    });
  }

  let randomAnswerOptions = addAnswerOptions(
    category,
    answer,
    primaryAffiliation,
    answerOptions
  );
  let answerCntr = 0;
  while (randomAnswerOptions.includes(answer) && answerCntr < 1000) {
    console.log(
      "%candomAnswerOptions.includes(answer): ",
      "background:red; color:white",
      randomAnswerOptions.includes(answer)
    );
    randomAnswerOptions = addAnswerOptions(
      category,
      answer,
      primaryAffiliation,
      answerOptions
    );

    answerCntr++;
  }

  console.log(
    "%c+++ randomAnswerOptions: ",
    "background:green; color:white",
    randomAnswerOptions
  );

  let allPhotoOptions = {};
  if (photoOptions) {
    allPhotoOptions = {
      photoOptionOne: photoOptions[1]
        ? photoOptions[1]
        : randomAnswerOptions[0],
      photoOptionTwo: photoOptions[2]
        ? photoOptions[2]
        : randomAnswerOptions[1],
      photoOptionThree: photoOptions[0] ? photoOptions[0] : answer,
    };
  } else {
    allPhotoOptions = {
      photoOptionOne: randomAnswerOptions[0],
      photoOptionTwo: randomAnswerOptions[1],
      photoOptionThree: answer,
    };
  }

  let allAnswerOptions = {};

  if (answerOptions && answerOptions.length >= 2) {
    allAnswerOptions = {
      answerOptionOne: answerOptions[0]
        ? answerOptions[0]
        : randomAnswerOptions[0],
      answerOptionTwo: answerOptions[1]
        ? answerOptions[1]
        : randomAnswerOptions[1],
    };
  } else {
    allAnswerOptions = {
      answerOptionOne: randomAnswerOptions[0],
      answerOptionTwo: randomAnswerOptions[1],
    };
  }

  // console.log("randomAnswerOptions: ", randomAnswerOptions);
  // console.log("OPTIONS-HOOKS answerOptions: ", answerOptions);
  // console.log("photoOptions: ", photoOptions);

  // const dupsRemoved = [...new Set(availableSpeakers)];
  // console.log("*******dupsRemoved: ", dupsRemoved);

  // console.log("allAnswerOptions: ", allAnswerOptions);

  let optionsArray = [
    {
      category,
      answer: allAnswerOptions.answerOptionOne,
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
      photo: allPhotoOptions.photoOptionOne,
    },
    {
      category,
      answer: allAnswerOptions.answerOptionTwo,
      handler: scoreCtx.addIncorrect,
      class: "incorrect",
      photo: allPhotoOptions.photoOptionTwo,
    },
    {
      category,
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

function addAnswerOptions(
  category,
  answer,
  primaryAffiliation,
  answerOptions,
  starWarsInfo = popularStarWarsInfo
) {
  console.log(
    "%c========== addAnswerOptions: ",
    "color: white; background: green",
    addAnswerOptions
  );
  console.log("%canswer: ", "color: green", answer);
  console.log("primaryAffiliation: ", primaryAffiliation);

  if (!answerOptions || answerOptions.length < 2) {
    let topicInfoArray = starWarsInfo[category];

    console.log(
      "%ctopicInfoArray: ",
      "background:cream; color: black",
      topicInfoArray
    );
    if (primaryAffiliation) {
      topicInfoArray = topicInfoArray.filter(
        (item) => item.primaryAffiliation === primaryAffiliation
      );
      console.log(
        "%c *** IN *** topicInfoArray: ",
        "background:cream; color: black",
        topicInfoArray
      );
    }

    function getTwoDiffRandomNumbers(max) {
      const randomOne = Math.floor(Math.random() * max);
      const randomTwo = Math.floor(Math.random() * max);

      if (randomOne === randomTwo) {
        return getTwoDiffRandomNumbers(max);
      }
      return [randomOne, randomTwo];
    }

    const randomNumbers = getTwoDiffRandomNumbers(topicInfoArray.length);
    const answerOptions = [
      topicInfoArray[randomNumbers[0]].name,
      topicInfoArray[randomNumbers[1]].name,
    ];

    console.log(
      "%c***********answerOptions:",
      "color: yellow; background:green",
      answerOptions
    );

    return answerOptions;
  } else {
    return [answerOptions[0], answerOptions[1]];
  }
}
