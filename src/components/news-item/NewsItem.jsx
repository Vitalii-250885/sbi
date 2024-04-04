import css from "./NewsItem.module.css";

const NewsItem = ({ img, date, text, title }) => {
  return (
    <>
      <li className={css["news-item"]}>
        <img src={img} alt="photo" className={css.photo} />

        <div className={css.description}>
          <span className={css.date}>{date}</span>
          <h4 className={css.title}>{title}</h4>
          <p className={css.text}>{text}</p>
          <div className={css["read-more"]}>Читати більше</div>
        </div>
      </li>
    </>
  );
};

export default NewsItem;
