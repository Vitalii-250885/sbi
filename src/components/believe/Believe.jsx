import { BsCheck } from "react-icons/bs";

import BelieveItem from "./believeItem/BelieveItem";

import css from "./Believe.module.css";

const Believe = () => {
  return (
    <div className={css.believe}>
      <h3 className={css.title}>У що ми віримо</h3>
      <ul className={css.list}>
        <BelieveItem />
      </ul>
    </div>
  );
};

export default Believe;
