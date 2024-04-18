import { Link, NavLink } from "react-router-dom";

import clsx from "classix";
import css from "./Header.module.css";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.button, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <img src="/logo.png" alt="logo" className={css.logo} />
      </Link>

      <div className={css["title-options"]}>
        <h1 className={css["header-title"]}>
          {"Слов'янський Баптистський Інститут"}
        </h1>
        <nav className={css.options}>
          <NavLink to="/news" className={buildLinkClass}>
            Новини
          </NavLink>
          <NavLink to="/about" className={buildLinkClass}>
            Про нас
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
