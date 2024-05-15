import css from "./HomePage.module.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <header className={css["header-page"]}>
        <img src="/img/homePage/logo-2.png" alt="logo" className={css.logo} />
        <div className={css["title-options"]}>
          <h1 className={css.title}>{"Слов'янський Баптистський Інститут"}</h1>

          <nav className={css.options}>
            <NavLink to="/news" className={css.button}>
              Новини
            </NavLink>
            <NavLink to="/about" className={css.button}>
              Про нас
            </NavLink>
            <NavLink to="/applicants" className={css.button}>
              Абітурієнтам
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomePage;
