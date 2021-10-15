import { BrowserRouter, Link } from "react-router-dom";
import styles from "./TopMenuBar.module.css";
import specialGradient from "../UI/Card/specialGradient.module.css";
import ArcText from "../UI/ArcText";
import Timer from "../Timer/Timer";

function TopMenuBar(props) {
  const imageOne = require(`../../assets/images/Leia_Organa.jpg`);
  const imageTwo = require(`../../assets/images/default.jpg`);
  const imageThree = require(`../../assets/images/Maul.jpg`);

  return (
    <nav
      className={`${styles["top-nav"]} ${
        props.gameRunning && styles["top-nav-game-mode"]
      } `}
    >
      <Link className={styles["app-title"]} to="/">
        <ArcText
          text={"Jedi Master Quiz Game"}
          objectSize={1000}
          spacing={12}
          offset={30}
        />

        <div className={styles["curved-text-wrap"]}>
          <ArcText
            text={"Fulfill Your Destiny"}
            objectSize={1000}
            spacing={12}
            offset={30}
          />
        </div>
      </Link>

      <ul className={styles["content-container"]}>
        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <div
            className={styles["inner-element-image"]}
            style={{
              backgroundSize: "cover",
              backgroundImage: "url(" + imageOne.default + ")",
            }}
          ></div>
          <Link to="/instructions">Quick Directions</Link>
        </li>
        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <div
            className={styles["inner-element-image"]}
            style={{
              backgroundSize: "cover",
              backgroundImage: "url(" + imageTwo.default + ")",
            }}
          ></div>
          {!props.gameRunning && <Link to="/">Play!</Link>}
          {props.gameRunning && <Timer />}
        </li>

        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <div
            className={styles["inner-element-image"]}
            style={{
              backgroundSize: "cover",
              backgroundImage: "url(" + imageThree.default + ")",
            }}
          ></div>
          <Link to="/ranking-system">How to Advance Your Jedi Rank</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenuBar;
