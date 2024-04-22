import NewsItem from "../../components/news-item/NewsItem";

import css from "./NewsPage.module.css";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const News = () => {
  return (
    <>
      <Header />
      <div className={css.news}>
        <h2 className={css.title}>Новини</h2>

        <ul className={css["news-list"]}>
          <NewsItem />
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default News;
