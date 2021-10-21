import styles from "./QuickInstructions.module.css";
import Card from "../UI/Card/Card";
import { withRouter } from "react-router-dom";

const QuickInstructions = (props) => {
  return (
    <Card>
      <div className={styles["instructions-container"]}>
        <h3>How to Play</h3>
        <p>
          Simply click the button to start the game and you will enter the Jedi
          Trials arena. You will see a question and three characters. Select the
          character that you believe best answers the question. Be quick and
          wise, young Padawan, for there is a Dark Side timer that{" "}
          <b>relenlessly and ruthlessly</b> ticks away for each question! Fail
          to answer in the alloted time and an inccorect mark you will be given.
        </p>
        <p>
          Your correct and incorrect answers will be tallied and your progress
          towards Jedi greatness will be tracked.
        </p>
        <button
          type="button"
          className={styles["close-btn"]}
          onClick={() => props.history.push("/")}
        >
          X
        </button>
      </div>
    </Card>
  );
};

export default withRouter(QuickInstructions);
