import css from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={css.rules}>
      <h3 className={css.title}>Правила та постанови</h3>
      <ul>
        <li className={css.item}>
          Оскільки сесія триває всього лише п’ять днів, тому часу на залицяння
          немає. Не повинно бути жодних побачень;
        </li>
        <li className={css.item}>
          Ми не схвалюємо пари, які усамітнюються від усіх присутніх на сесії;
        </li>
        <li className={css.item}>
          Молодята повинні вести себе належним чином: не сідати за одну парту,
          не триматися за руки, без жодних обіймів, поцілунків і т.п.;
        </li>
        <li className={css.item}>
          Всі студенти повинні зібратися по своїх кімнатах до 22:00. Початок
          загальної вечірньої молитви о 22:00 (брати та сестри окремо). О 23:00
          - світло повинне бути виключене, а студенти – у ліжках. 07:00 –
          підйом!
        </li>
        <li className={css.item}>
          Всі студенти повинні отримати дозвіл на пропуск уроку чи на
          відвідування вечірнього служіння церкви за межами СБІ. Студентам не
          дозволено відлучатися в понеділок та у вівторок ввечері, оскільки у
          вівторок та в середу – екзамени;
        </li>
        <li className={css.item}>
          Усі студенти повинні заповнювати звіти про служіння, завіривши їх
          підписом пастора;
        </li>
        <li className={css.item}>
          В переривах між сесіями кожен студент повинен підготувати та написати
          дві проповіді (брати) або два уроки для Недільної школи (сестри) по
          шість сторінок кожна, та здати їх в понеділок – в перший день сесії;
        </li>
        <li className={css.item}>
          Якщо студент пропустив за рік дві сесії чи більше, то йому потрібно
          пройти весь рік навчання заново, сплативши за пропущені сесії по
          100грн. за кожну;
        </li>
        <li className={css.item}>
          Якщо студент пропустив 2 дні сесії, тоді сесію потрібно буде пройти
          знову, та за рахунок студента – 100грн за неділю;
        </li>
        <li className={css.item}>
          Кожен новий навчальний рік розпочинається у лютому. Випуск – у травні;
        </li>
        <li className={css.item}>
          Книги, конспекти та інші розробки матеріалів не видаються відвідувачам
          або студентам, які не мають наміру продовжувати навчання. Книги можна
          придбати за бажанням, звичайно, якщо будуть зайві. Нічого не можна
          перевидавати чи копіювати без письмового дозволу автора, який
          розробляв даний матеріал;
        </li>
        <li className={css.item}>
          СБІ забезпечує студентів проживанням та харчуванням лише на дні сесії
          – з понеділка по п’ятницю. Якщо ж студент приїжджає раніше або пізніше
          зазначених днів, то він повинен самостійно попіклуватися про себе;
        </li>
        <li className={css.item}>
          Студент, який не виконує вищезазначені правила – не може отримати
          диплом!
        </li>
      </ul>
    </div>
  );
};

export default Rules;
