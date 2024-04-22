import ProgramItem from "./programItem/ProgramItem";

import subjects from "../../subjects.json";

import css from "./Program.module.css";

const Program = () => {
  return (
    <div className={css.program}>
      <h3 className={css.title}>Програма навчання</h3>
      <p className={css.text}>
        Слов’янський Баптистський Інститут пропонує цікаву та корисну
        чотирирічну програму навчання. Щорічно проходять чотири сесії,
        тривалістю п’ять днів кожна (з понеділка по п’ятницю). Кожну сесію
        студенти вивчають два нових предмети. Усі викладачі СБІ – здібні,
        досвідчені та посвячені Богу служителі.
      </p>
      <div className={css["subjects-container"]}>
        <h4 className={css.subtitle}>Деякі з предметів, що вивчаються:</h4>
        <ul className={css["subject-list"]}>
          {subjects.map(({ item, id }) => (
            <ProgramItem key={id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Program;
