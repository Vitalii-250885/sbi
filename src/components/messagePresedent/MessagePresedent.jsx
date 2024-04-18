import css from "./MessagePresedent.module.css";

const WordPresedent = () => {
  return (
    <div className={css["message-presedent"]}>
      <h3 className={css.title}>Слово президента СБІ</h3>

      <div className={css.article}>
        <img
          src="/IMG_0222_small.jpg"
          alt="Derek Thomas"
          className={css.photo}
        />
        <p>
          «Слов’янський Баптистський Інститут (СБІ) був заснований в лютому 1996
          року. Кінцева мета СБІ – прославити Бога. Ми можемо славити Бога, коли
          Його діти вивчають Слово Боже, вірять у Нього та застосовують це у
          життя. Ми бажаємо, щоб ко...
        </p>
      </div>

      <div className={css["read-more"]}>Читати більше</div>
    </div>
  );
};

export default WordPresedent;
