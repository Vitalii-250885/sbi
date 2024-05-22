import css from "./Library.module.css";

const Library = () => {
  return (
    <>
      <h3 className={css.title}>Конспекти</h3>
      <table className={css.table}>
        <thead>
          <tr className={css.head}>
            <td>Предмет</td>
            <td>Автор</td>
            <td>Кількість сторінок</td>
          </tr>
        </thead>
        <tbody>
          <tr className={css.rows}>
            <td className={css.cells}>
              <a href="/abstracts/Minor_prothets_UA.docx" className={css.link}>
                Малі пророки
              </a>
            </td>
            <td className={css.cells}>Парфенюк Павло Васильович</td>
            <td className={css.cells}>17</td>
          </tr>
          <tr className={css.rows}>
            <td className={css.cells}>
              <a
                href="/abstracts/UKR_John's_epistles-master.docx"
                className={css.link}>
                Послання Івана
              </a>
            </td>
            <td className={css.cells}>
              Карл Ліндерман та Парфенюк Павло Васильович
            </td>
            <td className={css.cells}>17</td>
          </tr>
        </tbody>
      </table>

      <h3 className={css.title}>Книги додаткового читання</h3>
      <table className={css.table}>
        <thead>
          <tr className={css.head}>
            <td>Назва</td>
            <td>Автор</td>
            <td>Кількість сторінок</td>
          </tr>
        </thead>
        <tbody>
          <tr className={css.rows}>
            <td className={css.cells}>
              <a href="/books/harizmatiki-MakArtur.pdf" className={css.link}>
                Харизматики
              </a>
            </td>
            <td className={css.cells}>Джон Ф. МакАртур</td>
            <td className={css.cells}>199</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Library;
