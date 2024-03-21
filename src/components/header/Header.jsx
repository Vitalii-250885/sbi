import Options from "../options/Options";

import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={css["header-page"]}>
        <img src="src/images/logo.png" alt="logo" />
        <div className={css["title-options"]}>
          <h1 className={css.title}>{"Слов'янський Баптистський Інститут"}</h1>
          <div>
            <Options />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
