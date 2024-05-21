import css from "./Counter.module.css";

const Counter = () => {
  return (
    <div className={css.counter}>
      <a target="_blank" href="https://mycounter.ua/">
        <img
          src="https://get.mycounter.ua/counter.php?id=176577"
          title="MyCounter - счётчик и статистика"
          alt="MyCounter - счётчик и статистика"
          width="88"
          height="51"
          border="0"
        />
      </a>
    </div>
  );
};

export default Counter;
