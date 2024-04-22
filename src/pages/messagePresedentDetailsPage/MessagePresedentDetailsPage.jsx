import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import css from "./MessagePresedentDetailsPage.module.css";

import { Link } from "react-router-dom";

const MessagePresedentDetailsPage = () => {
  return (
    <>
      <Header />
      <div className={css["message-presedent"]}>
        <div className={css["message-presedent-container"]}>
          <div className={css["top-article"]}>
            <h3 className={css.title}>Слово президента СБІ</h3>
            <Link to="/about" className={css["go-back"]}>
              Назад
            </Link>
          </div>

          <img
            src="IMG_0222_small.jpg"
            alt="Дерек Томас"
            className={css.image}
          />
          <p className={css.text}>
            <p className={css.paragraph}>
              «Слов’янський Баптистський Інститут(СБІ) був заснований в лютому
              1996 року. Кінцева мета СБІ – прославити Бога. Ми можемо славити
              Бога, коли Його діти вивчають Слово Боже, вірять у Нього та
              застосовують це у життя. Ми бажаємо, щоб кожен студент СБІ після
              кожної сесії повертався до своєї церкви з більш глибоким
              розумінням Писання та сильнішим бажанням служити Господу.
            </p>
            <p className={css.paragraph}>
              Для нас це велика привілея та радість Служити разом нашому
              великому Богу та допомагати помісним церквам в Україні».
            </p>
            <p className={css.sign}>Дерек Томас</p>
            <p className={css.sign}>
              Президент Слов’янського Баптистського Інституту
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MessagePresedentDetailsPage;
