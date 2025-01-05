import s from "./Options.module.css";
const Options = ({ onUpdateFeedback, totalFeedback, onReset }) => {
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={() => onUpdateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => onUpdateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => onUpdateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
