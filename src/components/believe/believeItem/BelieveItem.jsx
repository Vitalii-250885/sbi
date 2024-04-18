import css from "./BelieveItem.module.css";
import { useEffect, useState } from "react";
import { fetchBelieve } from "../../../api/news";

const BelieveItem = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const resData = await fetchBelieve();

      setResData(resData);
    };
    load();
  }, []);

  return (
    <>
      {resData.map(({ id, item }) => (
        <li key={id} className={css.item}>
          <span className={css.marker}>✔</span>
          <span className={css.text}>{item}</span>
        </li>
      ))}
    </>
  );
};

export default BelieveItem;
