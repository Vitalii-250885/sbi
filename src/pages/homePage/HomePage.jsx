import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css["header-page"]}>
      <img src="/img/homePage/logo-2.png" alt="logo" className={css.logo} />
      <div>
        <nav className={css.options}>
          <NavLink to="/events" className={css.button}>
            Події
          </NavLink>
          <NavLink to="/about" className={css.button}>
            Про нас
          </NavLink>
          <NavLink to="/applicants" className={css.button}>
            Абітурієнтам
          </NavLink>
        </nav>
        <div className={css["title-subtitle"]}>
          <h1 className={css.title}>{"Слов'янський Баптистський Інститут"}</h1>
          <p className={css.subtitle}>
            Підготовка працівників для Господніх жнив з 1996р.
          </p>
        </div>
      </div>
      <div className={css.main}>
        <div className={css.greeting}>
          <h2 className={css["greeting-title"]}>
            Вітаємо тебе, дорогий друже!
          </h2>
          <p className={css["greeting-text"]}>
            Ми дуже раді, що ти завітав до нас! Тут ти знайдеш всю інформацію
            про інститут, процес навчання, практику, події та служіння
          </p>
          <p className={css["greeting-invitation"]}>
            Будемо дуже раді бачити тебе у рядах наших студентів!
          </p>
        </div>
        <div className={css.photos}>
          <div className={css["left-fotos"]}>
            <img src="/img/homePage/1.jpg" alt="" className={css.img1} />
            <img src="/img/homePage/3.jpg" alt="" className={css.img3} />
          </div>
          <img src="/img/homePage/2.jpg" alt="" className={css.img2} />
          {/* <img src="/img/homePage/4.jpg" alt="" className={css.img4} /> */}
        </div>
      </div>
      {/* <div className={css["contacts-options"]}> */}
      {/* <ul className={css["contacts-list"]}>
          <li className={css["contacts-item"]}>
            <a href="https://www.facebook.com/sbiukraine?locale=uk_UA">
              <img
                src="/img/footer/facebook.png"
                alt="facebook"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="https://www.instagram.com/sbiukr/">
              <img
                src="/img/footer/instagram.png"
                alt="Instagram"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="tel:+380683689307">
              <img
                src="/img/footer/phone.png"
                alt="Phone"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="mailto:">
              <img src="/img/footer/mail.png" alt="mail" className={css.icon} />
            </a>
          </li>
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default HomePage;
