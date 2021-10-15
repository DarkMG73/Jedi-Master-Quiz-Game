import Card from "../UI/Card/Card";
import styles from "./StartGame.module.css";

function StartGame(props) {
  const StartGameHandler = () => {
    console.log("CLICKED");
    props.setGameRunning(true);
  };
  return (
    <div className={styles["opening-screen-wrap"]} onClick={StartGameHandler}>
      <Card>
        <h3 className={styles["opening-screen-title"]}>
          Ready for the Jedi Trials, you are.
        </h3>
        <h2 className={styles["opening-screen-cta"]}>Begin, We Shall &rarr;</h2>
      </Card>
    </div>
  );
}

export default StartGame;
