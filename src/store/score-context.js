import React, { useReducer } from "react";
import localStorageTools from "../hooks/localStorage";

const lSTools = localStorageTools();
const localStorageName = "jedi_quiz_game";
const ScoreContext = React.createContext({
  current: null,
  correct: [],
  incorrect: [],
  timerRunning: false,
  timerLength: 10,
  addCurrent: () => {},
  addCorrect: () => {},
  addIncorrect: () => {},
  setTimerRunning: () => {},
  setTimerLength: () => {},
  resetScoreContext: () => {},
});

const initDefaultScoreState = {
  current: null,
  correct: [],
  incorrect: [],
  timerRunning: false,
  timerLength: 10,
};
let defaultScoreState = { ...initDefaultScoreState };
const localStorageContents = lSTools.getFromLocal(localStorageName);

if (localStorageContents) {
  defaultScoreState = {
    current: null,
    correct: localStorageContents.correct,
    incorrect: localStorageContents.incorrect,
    timerRunning: false,
    timerLength: 10,
  };
}

const scoreReducer = (state, action) => {
  if (action.type === "ADD_TO_CURRENT") {
    return {
      current: action.id,
      correct: state.correct,
      incorrect: state.incorrect,
      timerRunning: state.timerRunning,
      timerLength: state.timerLength,
    };
  }

  if (action.type === "ADD_CORRECT") {
    const stateToSave = {
      correct: [...state.correct, state.current],
      incorrect: state.incorrect,
    };
    lSTools.saveToLocal(localStorageName, stateToSave);
    return {
      current: state.current,
      correct: [...state.correct, state.current],
      incorrect: state.incorrect,
      timerRunning: false,
      timerLength: state.timerLength,
    };
  }

  if (action.type === "ADD_INCORRECT") {
    const stateToSave = {
      correct: state.correct,
      incorrect: [...state.incorrect, state.current],
    };
    lSTools.saveToLocal(localStorageName, stateToSave);
    return {
      current: state.current,
      correct: state.correct,
      incorrect: [...state.incorrect, state.current],
      timerRunning: false,
      timerLength: state.timerLength,
    };
  }

  if (action.type === "CLEAR_SCORE") {
    lSTools.clearLocal(localStorageName);
    return initDefaultScoreState;
  }

  if (action.type === "TIMER_RUNNING") {
    return {
      current: state.current,
      correct: state.correct,
      incorrect: state.incorrect,
      timerRunning: action.value,
      timerLength: state.timerLength,
    };
  }

  if (action.type === "SET_TIMER-LENGTH") {
    return {
      current: state.current,
      correct: state.correct,
      incorrect: state.incorrect,
      timerRunning: state.timerRunning,
      timerLength: action.value,
    };
  }

  return defaultScoreState;
};

export const ScoreProvider = (props) => {
  const [scoreState, dispatchScoreAction] = useReducer(
    scoreReducer,
    defaultScoreState
  );

  const addCurrentHandler = (id) => {
    dispatchScoreAction({
      type: "ADD_TO_CURRENT",
      id,
    });
  };
  const addCorrectHandler = () => {
    dispatchScoreAction({
      type: "ADD_CORRECT",
    });
  };

  const addIncorrectHandler = () => {
    dispatchScoreAction({
      type: "ADD_INCORRECT",
    });
  };

  const setTimerRunningHandler = (value) => {
    dispatchScoreAction({
      type: "TIMER_RUNNING",
      value,
    });
  };

  const resetScoreContextHandler = () => {
    dispatchScoreAction({
      type: "CLEAR_SCORE",
    });
  };

  const setTimerLengthHandler = (value) => {
    dispatchScoreAction({
      type: "SET_TIMER-LENGTH",
      value,
    });
  };

  const scoreContext = {
    current: scoreState.current,
    correct: scoreState.correct,
    incorrect: scoreState.incorrect,
    timerRunning: scoreState.timerRunning,
    timerLength: scoreState.timerLength,
    addCurrent: addCurrentHandler,
    addCorrect: addCorrectHandler,
    addIncorrect: addIncorrectHandler,
    setTimerRunning: setTimerRunningHandler,
    setTimerLength: setTimerLengthHandler,

    resetScoreContext: resetScoreContextHandler,
  };

  return (
    <ScoreContext.Provider value={scoreContext}>
      {props.children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
