import { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Options.module.css";
import { convertID } from "../../hooks/utilities";
import Logo from "../../assets/images/Anakin_Skywalker.webp";

const Options = (props) => {
  const [isSelectedArray, setIsSelectedArray] = useState({});
  const [disableAfterClick, setDisableAfterClick] = useState(true);
  const answerOptions = props.answerOptions;

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
    const targetOption = answerOptions.filter(
      (option) => option.answer === convertID(e.target.id, true)
    );
    targetOption[0].handler();
    setDisableAfterClick(false);
  };
  console.log("public url: ", process.env.PUBLIC_URL);
  return (
    <Card>
      <div className={classes["options-container"]}>
        <div
          id={convertID(answerOptions[0].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[0].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
        >
          <img
            className="img-fluid"
            src={`${process.env.PUBLIC_URL}/assets/images/Anakin_Skywalker.webp`}
            alt="logo"
          />
          <img src={Logo} />
          {answerOptions[0].answer}
        </div>
        <div
          id={convertID(answerOptions[1].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[1].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
        >
          {answerOptions[1].answer}
        </div>
        <div
          id={convertID(answerOptions[2].answer)}
          className={
            classes.option +
            " " +
            (isSelectedArray[convertID(answerOptions[2].answer)] === true
              ? classes.selected
              : "") +
            " " +
            (!disableAfterClick && classes.inactive)
          }
          onClick={handler}
        >
          {answerOptions[2].answer}
        </div>
      </div>
    </Card>
  );
};

export default Options;
