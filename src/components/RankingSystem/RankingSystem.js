import styles from "./RankingSystem.module.css";
import { withRouter } from "react-router-dom";

import Card from "../UI/Card/Card";

const RankingSystem = (props) => {
  return (
    <Card>
      <div className={styles["instructions-container"]}>
        <h3>Ranking System</h3>
        <button type="button" onClick={() => props.history.push("/")}>
          Close
        </button>
      </div>
    </Card>
  );
};

export default withRouter(RankingSystem);
