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
  const totalQuestionNumber = props.totalQuestionNumber;
  const questionsAmountUsed =
    scoreCtx.correct.length + scoreCtx.incorrect.length + 1;

  console.log(
    "%c--------------------------------",
    "background: black;color:white"
  );
  console.log("%c--- BEGIN QUESTION ---", "background: black;color:white");
  console.log(
    "%c--------------------------------",
    "background: black;color:white"
  );

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
    console.log("%c--- BEGIN newQuestionHandler ---", "background:pink");
    const endOutput = getQuestion(...questionArgs);
    window.scrollTo(0, 0);
    console.log("%cendOutput: ", "background:pink", endOutput);
    scoreCtx.setTimerRunning(true);
    if (endOutput === "QUESTIONS_DEPLETED") setGameRunning(false);
  };
  console.log(": ");
  console.log("%cquestion", "background: black;color:white", question);
  console.log(
    "%cquestion.questionText: ",
    "background: black;color:white",
    question.questionText
  );

  return (
    <div className={styles["questions-container"]}>
      {question && gameRunning && (
        <div>
          <div className={styles["question-container"]}>
            <Card>
              {timerRunning && (
                <div className={styles["question-text"]}>
                  <p className={styles["special-scrollbar"]}>
                    <span className={styles["question-prequestion"]}>
                      {question.preQuestion}
                    </span>
                    <br />
                    {question.questionText} <br />
                  </p>
                </div>
              )}

              {!timerRunning && (
                <div
                  className={
                    styles["answer-explanation"] + " " + styles["question-text"]
                  }
                >
                  <p className={styles["special-scrollbar"]}>
                    {question.answerExplanation
                      ? question.answerExplanation
                      : question.answer}
                  </p>
                </div>
              )}
              <div className={styles["question-count"]}>
                Question {questionsAmountUsed} / {totalQuestionNumber}
              </div>
            </Card>
          </div>
          {question.answerOptions && (
            <Options
              answerOptions={question.answerOptions}
              category={question.category}
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
