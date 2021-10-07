import Card from "../UI/Card/Card";

function StartGame(props) {
  const StartGameHandler = () => {
    props.setGameRunning(true);
  };
  return (
    <Card>
      <h3>Are you ready for the Jedi Trials?</h3>
      <button onClick={StartGameHandler}>Begin, We Shall</button>
    </Card>
  );
}

export default StartGame;
