import { useState } from "react";
import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={s.feedbackTitle}>Good: {good}</p>
      <p className={s.feedbackTitle}>Neutral: {neutral}</p>
      <p className={s.feedbackTitle}>Bad: {bad}</p>
      <p className={s.feedbackTitle}>Total: {totalFeedback}</p>
      <p className={s.feedbackTitle}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
