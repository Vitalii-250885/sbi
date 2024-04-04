import { useId } from "react";

import BelieveItem from "./believeItem/BelieveItem";

import believe from "../../believe.json";

import css from "./Believe.module.css";

const Believe = () => {
  const beliveId = useId();

  return (
    <div className={css.believe}>
      <h3 className={css.title}>У що ми віримо</h3>
      <ul className={css.list}>
        {believe.map(({ item }) => (
          <BelieveItem key={beliveId} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Believe;
