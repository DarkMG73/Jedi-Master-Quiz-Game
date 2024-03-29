import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./TopMenuBar.module.css";
import specialGradient from "../UI/Card/specialGradient.module.css";
import ArcText from "../UI/ArcText";
import Timer from "../Timer/Timer";
import ScoreContext from "../../store/score-context";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Card from "../UI/Card/Card";

function TopMenuBar(props) {
  const [timerStarted, setTimerStarted] = useState(false);
  const location = useLocation();
  const imageOne = require(`../../assets/images/characters/Leia_Organa.jpg`);
  const imageTwo = require(`../../assets/images/characters/default.jpg`);
  const imageThree = require(`../../assets/images/characters/Maul.jpg`);
  const countdownAnimation = timerStarted ? styles["countdownAnimation"] : "";
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  console.log("windowWidth: ", typeof windowWidth);
  const [scrollPosition, setScrollPosition] = useState(0);
  console.log("windowWidth < 460: ", windowWidth < 460);
  console.log("windowWidth: ", windowWidth);
  console.log("window.innerWidth", window.innerWidth);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log("position: ", position);
    setScrollPosition(position);
  };
  console.log("scrollPosition: ", scrollPosition);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const StartGameHandler = () => {
    props.setGameRunning(true);
  };

  console.log("scrollPosition >= 100: ", scrollPosition >= 100);

  return (
    <nav
      className={`${styles["top-nav"]} ${
        props.gameRunning && styles["top-nav-game-mode"]
      } ${props.gameRunning && scrollPosition >= 50 && styles["small-timer"]}`}
    >
      <Link className={styles["app-title"]} to="/">
        {windowWidth >= 460 && (
          <ArcText
            text={"Jedi Master Quiz Game"}
            objectSize={250}
            spacing={12}
            offset={30}
            addedClassName="arc-text"
          />
        )}

        {windowWidth >= 460 && (
          <div className={styles["arc-text-wrap"]}>
            <ArcText
              text={"Fulfill Your Destiny"}
              objectSize={250}
              spacing={12}
              offset={30}
            />
          </div>
        )}

        {windowWidth < 460 && (
          <ArcText
            text={"Jedi Master Quiz Game"}
            objectSize={windowWidth}
            spacing={12}
            offset={30}
            addedClassName="arc-text"
          />
        )}
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
          {location.pathname !== "/instructions" && (
            <Link to="/instructions">Quick Directions</Link>
          )}
          {location.pathname === "/instructions" && <Link to="/">Close</Link>}
        </li>
        <li
          className={`${styles["inner-element"]} ${specialGradient["special-gradient"]}`}
        >
          <div
            className={styles["inner-element-image"] + " " + countdownAnimation}
            style={{
              backgroundSize: "cover",
              backgroundImage: "url(" + imageTwo.default + ")",
            }}
          ></div>
          {!props.gameRunning && (
            <Link to="/" onClick={StartGameHandler}>
              Play!
            </Link>
          )}
          {props.gameRunning && <Timer passTimerStarted={setTimerStarted} />}
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
          {location.pathname !== "/ranking-system" && (
            <Link to="/ranking-system">How to Advance Your Jedi Rank</Link>
          )}
          {location.pathname === "/ranking-system" && <Link to="/">Close</Link>}
        </li>
      </ul>
    </nav>
  );
}

export default TopMenuBar;
