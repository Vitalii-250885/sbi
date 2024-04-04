import css from "./TestimonialsItem.module.css";

const TestimonialsItem = ({ item }) => {
  return (
    <li className={css.item}>
      <img src={item.photo} alt={item.name} className={css.photo} />
      <article className={css.article}>
        {item.article}
        <p className={css.sign}>{item.name}</p>
      </article>
    </li>
  );
};

export default TestimonialsItem;
