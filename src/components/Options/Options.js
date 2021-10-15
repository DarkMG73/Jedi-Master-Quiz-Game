import { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Options.module.css";
import { convertID } from "../../hooks/utilities";

const Options = (props) => {
  const [isSelectedArray, setIsSelectedArray] = useState({});
  const [disableAfterClick, setDisableAfterClick] = useState(true);
  const answerOptions = props.answerOptions;
  const timerRunning = props.timerRunning;
  console.log("answerOptions: ", answerOptions);

  const replSpace = (str) => {
    return str.trim().replaceAll(" ", "_");
  };

  let imageOne;
  try {
    imageOne = require(`../../assets/images/${replSpace(
      answerOptions[0].answer
    )}.jpg`);
  } catch {
    imageOne = require(`../../assets/images/default.jpg`);
  }
  let imageTwo;
  try {
    imageTwo = require(`../../assets/images/${replSpace(
      answerOptions[1].answer
    )}.jpg`);
  } catch {
    imageTwo = require(`../../assets/images/default.jpg`);
  }

  let imageThree;
  try {
    imageThree = require(`../../assets/images/${replSpace(
      answerOptions[2].answer
    )}.jpg`);
  } catch {
    imageThree = require(`../../assets/images/default.jpg`);
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
    console.log("targetOption ", targetOption);

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
