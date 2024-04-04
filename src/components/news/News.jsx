import NewsItem from "../news-item/NewsItem";

import css from "./News.module.css";

import news from "../../news.json";

const News = () => {
  return (
    <div className={css.news}>
      <h2 className={css.title}>Новини</h2>
      <ul className={css["news-list"]}>
        {news.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            img={newsItem.img}
            date={newsItem.date}
            text={newsItem.text}
            title={newsItem.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default News;
