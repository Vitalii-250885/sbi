import { Link } from "react-router-dom";
import css from "./NewsItem.module.css";

const NewsItem = ({ id, img, date, text, title }) => {
  return (
    <>
      <li className={css["news-item"]}>
        <img src={img} alt="photo" className={css.photo} />

        <div className={css.description}>
          <span className={css.date}>{date}</span>
          <h4 className={css.title}>{title}</h4>
          <p className={css.text}>{text}</p>
          <Link to={`/news/${id}`} className={css["read-more"]}>
            Читати більше
          </Link>
        </div>
      </li>
    </>
  );
};

export default NewsItem;
