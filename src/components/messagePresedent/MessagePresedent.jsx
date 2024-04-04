import css from "./MessagePresedent.module.css";

const WordPresedent = () => {
  return (
    <div className={css["message-presedent"]}>
      <h2 className={css.title}>Слово президента СБІ</h2>
      <img src="/IMG_0222_small.jpg" alt="Derek Thomas" className={css.photo} />
      <article className={css.article}>
        «Слов’янський Баптистський Інститут (СБІ) був заснований в лютому 1996
        року. Кінцева мета СБІ – прославити Бога. Ми можемо славити Бога, коли
        Його діти вивчають Слово Боже, вірять у Нього та застосовують це у
        життя. Ми бажаємо, щоб кожен студент СБІ після кожної сесії повертався
        до своєї церкви з більш глибоким розумінням Писання та сильнішим
        бажанням служити Господу. Для нас це велика привілея та радість Служити
        разом нашому великому Богу та допомагати помісним церквам в Україні».
        <p className={css.sign}>Дерек Томас</p>
        <p className={css.sign}>
          Президент Слов’янського Баптистського Інституту
        </p>
      </article>
    </div>
  );
};

export default WordPresedent;
