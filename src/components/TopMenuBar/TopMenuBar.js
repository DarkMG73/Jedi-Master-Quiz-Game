import { BrowserRouter, Link } from "react-router-dom";
import styles from "./TopMenuBar.module.css";
import specialGradient from "../UI/Card/specialGradient.module.css";

function TopMenuBar() {
  return (
    <nav className={`${styles["top-nav"]} `}>
      <ul className={styles["content-container"]}>
        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <Link to="/instructions">Quick Instructions</Link>
        </li>
        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <Link to="/">Become a Jedi Quiz Game</Link>
        </li>

        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <Link to="/ranking-system">How to Advance Your Jedi Rank</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopMenuBar;
