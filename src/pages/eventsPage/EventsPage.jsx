import EventsItem from "../../components/events-item/EventsItem";

import css from "./EventsPage.module.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const Events = () => {
  return (
    <>
      <Header />
      <div className={css.events}>
        <h2 className={css.title}>Події</h2>

        <ul className={css["events-list"]}>
          <EventsItem />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Events;
