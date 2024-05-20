import { Link, NavLink } from "react-router-dom";

import clsx from "classix";
import css from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.button, isActive && css.active);
  };

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={css.header}>
      <Link to="/">
        <img src="/img/homePage/logo-2.png" alt="logo" className={css.logo} />
      </Link>

      <div onClick={openMenu}>
        <img
          src="/img/header/menu_burger_icon_177188.svg"
          alt=""
          className={css.boorger}
        />
      </div>

      <div className={css["title-options"]}>
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
        <div
          className={clsx(
            css["mobile-menu"],
            isOpen && css["open-mobile-menu"]
          )}>
          <img
            src="/img/header/cancel-cross_icon-icons.com_71726.svg"
            alt=""
            className={css.cansel}
            onClick={closeMenu}
          />
          <nav className={css["mobile-options"]}>
            <NavLink
              to="/events"
              className={buildLinkClass}
              onClick={closeMenu}>
              Події
            </NavLink>
            <NavLink to="/about" className={buildLinkClass} onClick={closeMenu}>
              Про нас
            </NavLink>
            {/* <NavLink
              to="/applicants"
              className={buildLinkClass}
              onClick={closeMenu}>
              Абітурієнтам
            </NavLink> */}
            {/* <NavLink to="/contacts" className={buildLinkClass}>
              Контакти
            </NavLink> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
