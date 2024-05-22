import { NavLink, Outlet } from "react-router-dom";
import users from "../../users.json";

import clsx from "classix";

import css from "./UserPage.module.css";

const UserPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.button, isActive && css.active);
  };

  const user = users[0];

  const { name, photo, entryDate, complationDate } = user;

  return (
    <>
      <div className={css.user}>
        <div className={css["user-container"]}>
          <div className={css}>
            <img src={photo} alt={name} className={css.photo} />
            <h3 className={css.title}>{name}</h3>
            <p className={css.text}>Дата вступу: {entryDate}</p>
            <p className={css.text}>Дата закінчення: {complationDate}</p>
            <div className={css.options}>
              <NavLink to="subjects" className={buildLinkClass}>
                Пройдені предмети
              </NavLink>
              <NavLink to="library" className={buildLinkClass}>
                Бібліотека
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserPage;
