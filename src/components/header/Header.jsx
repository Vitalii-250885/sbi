import { useState } from "react";
import { Link } from "react-router-dom";

import Options from "../options/Options";

import clsx from "classix";
import css from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        {window.screen.width > 768 && <Options />}
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
          <Options />
        </div>
      </div>
    </header>
  );
};

export default Header;
