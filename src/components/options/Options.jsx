import { NavLink } from "react-router-dom";

import clsx from "classix";
import css from "./Options.module.css";

const Options = ({ closeMenu, isAlwaysVisible }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.button, isActive && css.active);
  };

  const buildVisibleOptions = () => {
    return isAlwaysVisible ? "mobile-options" : "main-options";
  };

  return (
    <nav className={css[`${buildVisibleOptions()}`]}>
      <NavLink to="/events" className={buildLinkClass} onClick={closeMenu}>
        Події
      </NavLink>
      <NavLink to="/about" className={buildLinkClass} onClick={closeMenu}>
        Про нас
      </NavLink>
      {/* <NavLink to="/applicants" className={buildLinkClass} onClick={closeMenu}>
            Абітурієнтам
          </NavLink> */}
      <NavLink to="/contacts" className={buildLinkClass} onClick={closeMenu}>
        Контакти
      </NavLink>
    </nav>
  );
};

export default Options;
