import { NavLink } from "react-router-dom";

import clsx from "classix";
import css from "./Options.module.css";

const Options = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.button, isActive && css.active);
  };

  return (
    <nav className={css.options}>
      <NavLink to="/events" className={buildLinkClass}>
        Події
      </NavLink>
      <NavLink to="/about" className={buildLinkClass}>
        Про нас
      </NavLink>
      {/* <NavLink to="/applicants" className={buildLinkClass}>
            Абітурієнтам
          </NavLink> */}
      {/* <NavLink to="/contacts" className={buildLinkClass}>
            Контакти
          </NavLink> */}
    </nav>
  );
};

export default Options;
