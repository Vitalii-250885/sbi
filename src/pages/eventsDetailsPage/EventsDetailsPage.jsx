import { Link, useParams } from "react-router-dom";

import PhotoAlbum from "../../components/photoAlbum/PhotoAlbum";

import css from "./EventsDetailsPage.module.css";

import events from "../../events.json";

const NewsDetailsPage = () => {
  const { eventId } = useParams();

  const article = events.filter((item) => item.id === eventId);

  const title = article[0].title;
  const text = article[0].text;
  const img = article[0].img;
  const date = article[0].date;
  const category = article[0].category;

  return (
    <>
      <div className={css.events}>
        <div className={css["events-container"]}>
          <img src={`/${img}`} alt="" className={css.image} />
          <div className={css["top-article"]}>
            <p className={css.date}>{date}</p>
            <Link to="/events" className={css["go-back"]}>
              Назад
            </Link>
          </div>
          <div>
            <img src={category} alt="" className={css.category} />
          </div>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{text}</p>
          {category === "/img/news/news.png" && <PhotoAlbum />}
        </div>
      </div>
    </>
  );
};

export default NewsDetailsPage;
