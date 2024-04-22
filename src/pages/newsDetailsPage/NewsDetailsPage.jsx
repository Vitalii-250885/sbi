import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNews } from "../../api/news";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import css from "./NewsDetailsPage.module.css";

const NewsDetailsPage = () => {
  const { newsId } = useParams();

  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const load = async () => {
      const resData = await fetchNews(newsId);
      const { img, date, title, text } = resData;

      setImage(img);
      setDate(date);
      setTitle(title);
      setText(text);
    };
    load();
  }, [newsId]);

  return (
    <>
      <Header />
      <div className={css.news}>
        <div className={css["news-container"]}>
          <img src={`/${image}`} alt="" className={css.image} />
          <div className={css["top-article"]}>
            <p className={css.date}>{date}</p>
            <Link to="/news" className={css["go-back"]}>
              Назад
            </Link>
          </div>
          <h2 className={css.title}>{title}</h2>
          <p className={css.text}>{text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailsPage;
