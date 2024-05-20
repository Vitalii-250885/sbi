import EventsItem from "../../components/events-item/EventsItem";

import css from "./EventsPage.module.css";

const Events = () => {
  return (
    <>
      <div className={css.events}>
        <h2 className={css.title}>Події</h2>
        <ul className={css["events-list"]}>
          <EventsItem />
        </ul>
      </div>
    </>
  );
};

export default Events;
