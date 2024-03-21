import css from "./NewsItem.module.css";

const NewsItem = () => {
  return (
    <>
      <li className={css["news-item"]}>
        <img
          src="src/images/369682240_3108910742746298_5921123148871020284_n.jpg"
          alt="photo"
          className={css.photo}
        />

        <div className={css.description}>
          <span className={css.date}>26.08.2023</span>
          <p className={css.text}>
            Пройшла чергова сесія Слов’янського Баптистського Інституту. Було
            дуже класно, там було багато цікавого{" "}
            <span className={css["read-more"]}>...Читати більше</span>
          </p>
        </div>
      </li>
      <li className={css["news-item"]}>
        <img
          src="src/images/369682240_3108910742746298_5921123148871020284_n.jpg"
          alt="photo"
          className={css.photo}
        />

        <div className={css.description}>
          <span className={css.date}>26.08.2023</span>
          <p className={css.text}>
            Пройшла чергова сесія Слов’янського Баптистського Інституту. Було
            дуже класно, там було багато цікавого{" "}
            <span className={css["read-more"]}>...Читати більше</span>
          </p>
        </div>
      </li>
    </>
  );
};

export default NewsItem;
