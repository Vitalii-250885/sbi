import NewsItem from "../../components/news-item/NewsItem";

import css from "./NewsPage.module.css";

import news from "../../news.json";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const News = () => {
  return (
    <>
      <Header />
      <div className={css.news}>
        <h2 className={css.title}>Новини</h2>
        <ul className={css["news-list"]}>
          {news.map((newsItem) => (
            <NewsItem
              key={newsItem.id}
              img={newsItem.img}
              date={newsItem.date}
              text={newsItem.text}
              title={newsItem.title}
            />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default News;
