import css from "./MessagePresedent.module.css";

import { Link } from "react-router-dom";

const WordPresedent = () => {
  return (
    <div className={css["message-presedent"]}>
      <h3 className={css.title}>Слово президента СБІ</h3>

      <div className={css.article}>
        <img src="IMG_0222_small.jpg" alt="Дерек Томас" className={css.photo} />
        <p className={css.text}>
          <p>
            «Слов’янський Баптистський Інститут(СБІ) був заснований в лютому
            1996 року. Кінцева мета СБІ – прославити Бога. Ми можемо славити
            Бога, коли Його діти вивчають Слово Боже, вірять у Нього та
            застосовують це у життя. Ми бажаємо, щоб кожен студент СБІ після
            кожної сесії повертався до своєї церкви з більш глибоким розумінням
            Писання та сильнішим бажанням служити Господу.
          </p>
          <p>
            Для нас це велика привілея та радість Служити разом нашому великому
            Богу та допомагати помісним церквам в Україні».
          </p>
          <p>Дерек Томас</p>
          <p>Президент Слов’янського Баптистського Інституту</p>
        </p>
      </div>

      <Link to="/messagePresedent" className={css["read-more"]}>
        Читати більше
      </Link>
    </div>
  );
};

export default WordPresedent;
