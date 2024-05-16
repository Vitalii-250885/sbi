import { Link } from "react-router-dom";
import css from "./EventsItem.module.css";

import events from "../../events.json";

const EventsItem = () => {
  return (
    <>
      {events.map(({ id, category, date, img, title, text }) => (
        <li key={id} className={css["events-item"]}>
          <img src={img} alt={title} className={css.photo} />

          <div className={css.description}>
            <span className={css.date}>{date}</span>
            <img src={category} alt="" className={css.category} />
            <h4 className={css.title}>{title}</h4>
            <p className={css.text}>{text}</p>
            <Link to={`/events/${id}`} className={css["read-more"]}>
              Читати більше
            </Link>
          </div>
        </li>
      ))}
    </>
  );
};

export default EventsItem;
