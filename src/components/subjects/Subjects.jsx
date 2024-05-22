import users from "../../users.json";

import css from "./Subjects.module.css";

const user = users[0];

const { subjects } = user;

const Subjects = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <td>Дата</td>
          <td>Предмет</td>
          <td>Оцінка екзамен</td>
          <td>Оцінка Д/З</td>
        </tr>
      </thead>
      <tbody>
        {subjects.map(({ id, date, subject, gradeHW, gradeExam }) => {
          return (
            <tr key={id} className={css.rows}>
              <td className={css.cells}>{date}</td>
              <td className={css.cells}>{subject}</td>
              <td className={css.cells}>{gradeHW}</td>
              <td className={css.cells}>{gradeExam}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Subjects;
