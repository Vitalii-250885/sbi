import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header className={css["header-page"]}>
        <img src="/logo.png" alt="logo" className={css.logo} />
        <div className={css["title-options"]}>
          <h1 className={css.title}>{"Слов'янський Баптистський Інститут"}</h1>

          <div className={css["verses-container"]}>
            <p className={css.verse}>
              Отже, мій сину, міцній у благодаті, яка в Ісусі Христі. І що ти
              почув від мене при багатьох свідках, те передай вірним людям, які
              будуть спроможні й інших навчити.
            </p>
            <p className={css.reference}>2 Тимофія 2:1-2</p>
          </div>
          <div className={css["verses-container"]}>
            <p className={css.verse}>
              Постарайся представити себе гідним перед Богом, бездоганним
              працівником, який наставляє на принципи істини.
            </p>
            <p className={css.reference}>2 Тимофія 2:15</p>
          </div>
          <nav className={css.options}>
            <NavLink to="/news" className={css.button}>
              Новини
            </NavLink>
            <NavLink to="/about" className={css.button}>
              Про нас
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomePage;
