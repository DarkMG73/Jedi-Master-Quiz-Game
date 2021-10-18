import styles from "./RankingSystem.module.css";
import { withRouter } from "react-router-dom";
import Card from "../UI/Card/Card";
import Ranks from "../Ranks/Ranks";

const RankingSystem = (props) => {
  return (
    <Card>
      <div className={styles["rankings-container"]}>
        <h3>Ranking System</h3>
        <div className={styles["ranking-detail"]}>
          Starting as a simple youngling-level of Jedi knowledge, you must
          demonstrate your mastery of the knowlge in this quiz to advance in
          rank. Only a depth of understanding and clarity of thought will allow
          a careful few to attain the highest level, Jedi Grand Master, and win
          this challenge. Ayything short of that, is failing the high praise
          Grand Master Yoda has given to your potential. Do not let him down!
        </div>
        <h4>Ranks</h4>
        <ul className={styles["ranks"]}>
          {Ranks.map((rank) => (
            <li>{rank.rank}</li>
          ))}
        </ul>
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

export default withRouter(RankingSystem);
