import { useState, useEffect } from "react";
import Question from "../components/Questions/Question";
import Score from "../components/Score/Score";
import GameOver from "../components/GameOver/GameOver";
import StartGame from "../components/StartGame/StartGame";
import Background from "../components/UI/Background/Background";
import PageContainer from "../components/UI/PageContainer/PageContainer";

function HomePage() {
  const [gameRunning, setGameRunning] = useState(false);
  const [totalQuestionNumber, setTotalQuestionNumber] = useState();
  const [gameOver, setGameOver] = useState();

  useEffect(() => {
    if (gameOver === false) setGameRunning(true);
  }, [gameOver]);

  return (
    <PageContainer>
      <Background>
        <h1>Home</h1>
        {!gameRunning && <StartGame setGameRunning={setGameRunning} />}
        {gameOver && (
          <GameOver
            totalQuestionNumber={totalQuestionNumber}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />
        )}
        {gameRunning && (
          <Question
            gameRunning={gameRunning}
            setGameRunning={setGameRunning}
            setTotalQuestionNumber={setTotalQuestionNumber}
            gameOver={gameOver}
          />
        )}
        {gameRunning && (
          <Score
            totalQuestionNumber={totalQuestionNumber}
            gameOver={gameOver}
            setGameOver={setGameOver}
          />
        )}
      </Background>
    </PageContainer>
  );
}

export default HomePage;
