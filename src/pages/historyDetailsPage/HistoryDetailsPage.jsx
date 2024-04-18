import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import css from "./HistoryDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchHistory } from "../../api/news";
import { Link } from "react-router-dom";

const HistoryDetailsPage = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const load = async () => {
      const resData = await fetchHistory();
      const { img, text } = resData;

      setImage(img);
      setText(text);
    };
    load();
  }, []);

  return (
    <>
      <Header />
      <div className={css.history}>
        <div className={css["history-container"]}>
          <img src={`/${image}`} alt="" className={css.image} />
          <div className={css["top-article"]}>
            <h3 className={css.title}>Історія СБІ</h3>
            <Link to="/about" className={css["go-back"]}>
              ← Назад
            </Link>
          </div>
          <p className={css.text}>{text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryDetailsPage;
