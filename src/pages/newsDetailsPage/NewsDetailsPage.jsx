import { Link, useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import css from "./NewsDetailsPage.module.css";

import news from "../../news.json";

const NewsDetailsPage = () => {
  const { newsId } = useParams();

  const article = news.filter((item) => item.id === newsId);

  return (
    <>
      <Header />
      <div className={css.news}>
        <div className={css["news-container"]}>
          <img src={`/${article[0].img}`} alt="" className={css.image} />
          <div className={css["top-article"]}>
            <p className={css.date}>{article[0].date}</p>
            <Link to="/news" className={css["go-back"]}>
              Назад
            </Link>
          </div>
          <h2 className={css.title}>{article[0].title}</h2>
          <p className={css.text}>{article[0].text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsDetailsPage;
