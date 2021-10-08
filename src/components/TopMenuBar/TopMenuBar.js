import { BrowserRouter, Link } from "react-router-dom";
import styles from "./TopMenuBar.module.css";
import specialGradient from "../UI/Card/specialGradient.module.css";

function TopMenuBar() {
  return (
    <nav
      className={`${styles["top-nav"]} ${specialGradient["special-gradient"]}`}
    >
      <ul className={styles["content-container"]}>
        <li className={styles["inner-element"]}>
          <Link to="/">Become a Jedi Master Quiz Game</Link>
        </li>
        <li className={styles["inner-element"]}>
          <Link to="/instructions">Quick Instructions</Link>
        </li>
        <li className={styles["inner-element"]}>
          <Link to="/ranking-system">How to Advance Your Jedi Rank</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenuBar;
