import { useState, useEffect, useContext } from "react";
import styles from "./Question.module.css";
import Card from "../UI/Card/Card";
import { getAllQuestions, getQuestion } from "../../hooks/questions-hooks";
// import { getAllQuotes } from "../../hooks/HTTP/HTTPRequest"; // re-gather quotes
import Options from "../Options/Options";
import ScoreContext from "../../store/score-context";

function Question(props) {
  const [allQuestions, setAllQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const setGameRunning = props.setGameRunning;
  const gameRunning = props.gameRunning;
  const scoreCtx = useContext(ScoreContext);
  const setTimerRunning = scoreCtx.setTimerRunning;
  const timerRunning = scoreCtx.timerRunning;
  const gameOver = props.gameOver;

  const questionArgs = [
    allQuestions["allFetchedQuestionsIds"],
    allQuestions["allFetchedQuestions"],
    scoreCtx,
    setQuestion,
  ];

  useEffect(() => {
    if (gameRunning && !timerRunning) setTimerRunning(true);
  }, [gameRunning]);

  useEffect(() => {
    getAllQuestions(setAllQuestions, props.setTotalQuestionNumber);
  }, []);

  useEffect(() => {
    getQuestion(...questionArgs);
  }, [allQuestions]);

  const newQuestionHandler = function () {
    const endOutput = getQuestion(...questionArgs);
    scoreCtx.setTimerRunning(true);
    if (endOutput === "QUESTIONS_DEPLETED") setGameRunning(false);
  };
  console.log("question: ", question);

  return (
    <div className={styles["questions-container"]}>
      {question && gameRunning && (
        <div>
          <div className={styles["question-container"]}>
            <Card>
              <p className={styles["question-text"]}>
                <span className={styles["question-prequestion"]}>
                  {question.preQuestion}
                </span>{" "}
                "{question.questionText}" <br /> Answer:{question.answer}
              </p>
              {
                <p
                  className={
                    styles["question-text"] +
                    " " +
                    styles["answer-explanation"] +
                    " " +
                    (timerRunning &&
                      question.answerExplanation &&
                      styles["no-opacity"])
                  }
                >
                  {question.answerExplanation}
                </p>
              }
            </Card>
          </div>
          {question.answerOptions && (
            <Options
              answerOptions={question.answerOptions}
              timerRunning={timerRunning}
            />
          )}
        </div>
      )}
      {!gameRunning && <p>You have answered all of the questions!</p>}

      {!scoreCtx.timerRunning && !gameOver && (
        <button className={styles.button} onClick={newQuestionHandler}>
          <Card>Next Question</Card>
        </button>
      )}
    </div>
  );
}

export default Question;
