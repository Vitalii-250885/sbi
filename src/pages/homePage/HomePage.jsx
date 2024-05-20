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
          {/* <NavLink to="/applicants" className={css.button}>
            Абітурієнтам
          </NavLink> */}
          {/* <NavLink to="/contacts" className={css.button}>
            Контакти
          </NavLink> */}
        </nav>
        <div className={css["title-subtitle"]}>
          <h1 className={css.title}>{"Слов'янський Баптистський Інститут"}</h1>
          <p className={css.subtitle}>
            Підготовка працівників для Господніх жнив з 1996р.
          </p>
        </div>
      </div>
      <div className={css.main}>
        <div className={css.photos}>
          <div className={css["left-fotos"]}>
            <img src="/img/homePage/1.jpg" alt="" className={css.img1} />
            <img src="/img/homePage/3.jpg" alt="" className={css.img3} />
          </div>
          <img src="/img/homePage/2.jpg" alt="" className={css.img2} />
        </div>
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
      </div>
    </div>
  );
};

export default HomePage;
