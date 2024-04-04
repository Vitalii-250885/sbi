import css from "./BelieveItem.module.css";

const BelieveItem = ({ item }) => {
  return <li className={css.item}>{item}</li>;
};

export default BelieveItem;
