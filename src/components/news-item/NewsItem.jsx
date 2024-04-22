import { Link } from "react-router-dom";
import css from "./NewsItem.module.css";

import news from "../../news.json";

const NewsItem = () => {
  return (
    <>
      {news.map(({ id, date, img, title, text }) => (
        <li key={id} className={css["news-item"]}>
          <img src={img} alt={title} className={css.photo} />

          <div className={css.description}>
            <span className={css.date}>{date}</span>
            <h4 className={css.title}>{title}</h4>
            <p className={css.text}>{text}</p>
            <Link to={`/news/${id}`} className={css["read-more"]}>
              Читати більше
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default NewsItem;
