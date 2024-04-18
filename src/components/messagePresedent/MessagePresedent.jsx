import { useEffect, useState } from "react";
import css from "./MessagePresedent.module.css";
import { fetchMessagePresedent } from "../../api/news";
import { Link } from "react-router-dom";

const WordPresedent = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const load = async () => {
      const resData = await fetchMessagePresedent();
      const { img, text, name } = resData;

      setImage(img);
      setText(text);
      setName(name);
    };
    load();
  }, []);

  return (
    <div className={css["message-presedent"]}>
      <h3 className={css.title}>Слово президента СБІ</h3>

      <div className={css.article}>
        <img src={image} alt={name} className={css.photo} />
        <p className={css.text}>{text}</p>
      </div>

      <Link to="/messagePresedent" className={css["read-more"]}>
        Читати більше
      </Link>
    </div>
  );
};

export default WordPresedent;
