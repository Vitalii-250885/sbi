import NewsItem from "../news-item/NewsItem";

import css from "./News.module.css";

const News = () => {
  return (
    <div className={css.news}>
      <h2 className={css.title}>Новини</h2>
      <ul className={css["news-list"]}>
        <NewsItem />
      </ul>
    </div>
  );
};

export default News;
