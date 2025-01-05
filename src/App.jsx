import { useState } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("feedbackState");
    return savedState
      ? JSON.parse(savedState)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  const updateFeedback = (feedbackType) => {
    setState((prevState) => {
      const newState = {
        ...prevState,
        [feedbackType]: prevState[feedbackType] + 1,
      };
      localStorage.setItem("feedbackState", JSON.stringify(newState));
      return newState;
    });
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  const handleReset = () => {
    const resetState = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    setState(resetState);
    localStorage.setItem("feedbackState", JSON.stringify(resetState));
  };

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((state.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onReset={handleReset}
      />

      {totalFeedback > 0 ? (
        <Feedback
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
