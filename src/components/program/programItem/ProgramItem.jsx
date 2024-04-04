import css from "./ProgramItem.module.css";

const ProgramItem = ({ item }) => {
  return <li className={css.item}>{item}</li>;
};

export default ProgramItem;
