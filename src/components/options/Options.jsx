import css from "./Options.module.css";

const Options = () => {
  return (
    <>
      <div className={css["top-button"]}>
        <button type="button" className={css["button-subscribe"]}>
          Записатись
        </button>
      </div>
      <div>
        <button type="button" className={css.button}>
          Новини
        </button>
        <button type="button" className={css.button}>
          Про нас
        </button>
        <button type="button" className={css.button}>
          Бібліотека
        </button>
        <button type="button" className={css.button}>
          Контакти
        </button>
      </div>
    </>
  );
};

export default Options;
