import css from "./BelieveItem.module.css";

const BelieveItem = ({ id, item }) => {
  return (
    <>
      <li key={id} className={css.item}>
        <span className={css.marker}>✔</span>
        <span className={css.text}>{item}</span>
      </li>
    </>
  );
};

export default BelieveItem;
