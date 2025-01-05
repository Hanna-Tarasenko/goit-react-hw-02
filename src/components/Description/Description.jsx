import s from "./Description.module.css";

const Description = () => {
  return (
    <div>
      <h2 className={s.title}>Sip Happens Café</h2>
      <p className={s.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
