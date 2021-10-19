import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Question from "../components/Questions/Question";
import Score from "../components/Score/Score";
import GameOver from "../components/GameOver/GameOver";
import StartGame from "../components/StartGame/StartGame";
import QuickInstructions from "../components/QuickInstructions/QuickInstructions";
import RankingSystem from "../components/RankingSystem/RankingSystem";
import Background from "../components/UI/Background/Background";
import PageContainer from "../components/UI/PageContainer/PageContainer";
import Card from "../components/UI/Card/Card";

function HomePage(props) {
  const [totalQuestionNumber, setTotalQuestionNumber] = useState();
  const [gameOver, setGameOver] = useState();
  const gameRunning = props.gameRunning;
  const setGameRunning = props.setGameRunning;

  useEffect(() => {
    if (gameOver === false) setGameRunning(true);
  }, [gameOver]);

  return (
    <PageContainer maxWidth="1000px">
      <Background>
        <Switch>
          <Route path="/instructions" exact>
            <QuickInstructions />
          </Route>
          <Route path="/ranking-system" exact>
            <RankingSystem />
          </Route>
          <Route path="/"></Route>
        </Switch>
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
        {gameRunning && !gameOver && (
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
