import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Question from "../components/Questions/Question";
import Score from "../components/Score/Score";
import GameOver from "../components/GameOver/GameOver";
import StartGame from "../components/StartGame/StartGame";
import QuickInstructions from "../components/QuickInstructions/QuickInstructions";
import RankingSystem from "../components/RankingSystem/RankingSystem";
import PageContainer from "../components/UI/PageContainer/PageContainer";
import Card from "../components/UI/Card/Card";
import { AnimatePresence, motion } from "framer-motion";

function HomePage(props) {
  const [totalQuestionNumber, setTotalQuestionNumber] = useState();
  const [gameOver, setGameOver] = useState();
  const gameRunning = props.gameRunning;
  const setGameRunning = props.setGameRunning;
  const location = useLocation();
  const path = location.pathname;
  console.log("path: ", path);
  console.log('path === "/instructions": ', path === "/instructions");

  useEffect(() => {
    if (gameOver === false) setGameRunning(true);
  }, [gameOver]);

  return (
    <PageContainer maxWidth="1000px">
      <Switch>
        <Route path="/instructions">
          <QuickInstructions />
        </Route>
        <Route path="/ranking-system">
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
          totalQuestionNumber={totalQuestionNumber}
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
    </PageContainer>
  );
}

export default HomePage;
