import { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Options.module.css";
import { convertID, replSpace } from "../../hooks/utilities";

const Options = (props) => {
  const [isSelectedArray, setIsSelectedArray] = useState({});
  const [disableAfterClick, setDisableAfterClick] = useState(true);
  const answerOptions = props.answerOptions;
  const category = props.category;
  const timerRunning = props.timerRunning;

  console.log("%c--- BEGIN Options ---", "background: blue;color:white");
  console.log("%ccategory: ", "background:blue, color:white", category);

  let imageOne;
  const imageOneCategory = replSpace(answerOptions[0].category);
  const imageOnePhoto = replSpace(answerOptions[0].photo);
  try {
    console.log(
      "imageOne: ",
      `../../assets/images/${imageOneCategory}/${imageOnePhoto}.jpg`
    );
    imageOne = require(`../../assets/images/${imageOneCategory}/${imageOnePhoto}.jpg`);
  } catch {
    imageOne = require(`../../assets/images/${imageOneCategory}/default.jpg`);
  }

  let imageTwo;
  const imageTwoCategory = replSpace(answerOptions[1].category);
  const imageTwoPhoto = replSpace(answerOptions[1].photo);
  try {
    console.log(
      "imageTwo: ",
      `../../assets/images/${imageTwoCategory}/${imageTwoPhoto}.jpg`
    );
    imageTwo = require(`../../assets/images/${imageTwoCategory}/${imageTwoPhoto}.jpg`);
  } catch {
    imageTwo =
      category === "battles"
        ? require(`../../assets/images/battles/default-2.jpg`)
        : require(`../../assets/images/${imageTwoCategory}/default.jpg`);
  }

  let imageThree;
  const imageThreeCategory = replSpace(answerOptions[2].category);
  const imageThreePhoto = replSpace(answerOptions[2].photo);
  try {
    console.log(
      "imageThree: ",
      `../../assets/images/${imageThreeCategory}/${imageThreePhoto}.jpg`
    );
    imageThree = require(`../../assets/images/${imageThreeCategory}/${imageThreePhoto}.jpg`);
  } catch {
    imageThree =
      category === "battles"
        ? require(`../../assets/images/battles/default-3.jpg`)
        : require(`../../assets/images/${imageThreeCategory}/default.jpg`);
  }

  useEffect(() => {
    const isSelected = {};
    for (const option of answerOptions) {
      isSelected[convertID(option.answer)] = false;
    }

    setIsSelectedArray({ ...isSelected });
    setDisableAfterClick(true);
  }, [answerOptions]);

  const handler = (e) => {
    setIsSelectedArray({
      [convertID(e.target.id)]: !isSelectedArray[convertID(e.target.id)],
    });
    const targetOption = answerOptions.filter((option) => {
      return option.answer === convertID(e.target.id, true);
    });

    targetOption[0].handler();

    setDisableAfterClick(false);
  };

  return (
    <div className={classes["options-container"]}>
      <Card>
        <div
          id={convertID(answerOptions[0].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[0].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!timerRunning && classes[answerOptions[0].class]) +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + imageOne.default + ")",
          }}
        >
          <Card>
            <h3 className={classes["option-name"]}>
              {answerOptions[0].answer}
            </h3>
          </Card>
        </div>
      </Card>

      <Card>
        <div
          id={convertID(answerOptions[1].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[1].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!timerRunning && classes[answerOptions[1].class]) +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + imageTwo.default + ")",
          }}
        >
          <Card>
            <h3 className={classes["option-name"]}>
              {answerOptions[1].answer}
            </h3>
          </Card>
        </div>
      </Card>
      <Card>
        <div
          id={convertID(answerOptions[2].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[2].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!timerRunning && classes[answerOptions[2].class]) +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
          style={{
            backgroundSize: "cover",
            backgroundImage: "url(" + imageThree.default + ")",
          }}
        >
          <Card>
            <h3 className={classes["option-name"]}>
              {answerOptions[2].answer}
            </h3>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Options;
