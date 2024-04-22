import { Link } from "react-router-dom";
import css from "./History.module.css";
import { useEffect, useState } from "react";
import { fetchHistory } from "../../api/news";
import Loader from "../loader/Loader";

const History = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoader(true);

        const resData = await fetchHistory();
        const { img, text } = resData;

        setImage(img);
        setText(text);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    load();
  }, []);

  return (
    <div className={css.history}>
      <h3 className={css.title}>Історія СБІ</h3>
      {loader && <Loader />}
      {!loader && (
        <div className={css.article}>
          <img src={image} alt="" className={css.image} />
          <p className={css.text}>{text}</p>
        </div>
      )}

      <Link to="/history" className={css["read-more"]}>
        Читати більше
      </Link>
    </div>
  );
};

export default History;
