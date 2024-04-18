import css from "./History.module.css";

const History = () => {
  return (
    <div className={css.history}>
      <h3 className={css.title}>Історія СБІ</h3>

      <div className={css.article}>
        <p>
          «Біблійні історії для дітей» - це 33 історії зі Святого Письма від
          Створення світу до Воскресіння Христового з яскравими ілюстраціями та
          адаптованими сюжетами для дітей адаптував від отця Георгія Коваленка,
          ректора Відкритого Православного Універ...
        </p>

        <img src="/IMG_2650_small.jpg" alt="" className={css.image} />
      </div>
      <div className={css["read-more"]}>Читати більше</div>
    </div>
  );
};

export default History;
