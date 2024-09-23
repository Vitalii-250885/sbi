import css from "./Finance.module.css";

const Finance = () => {
  return (
    <div className={css.finance}>
      <h3 className={css.title}>Фінансові питання</h3>
      <ul>
        <li className={css.item}>
          Кожен студент самостійно оплачує за навчання. Сума оплати – 100грн. за
          кожну сесію;
        </li>
        <li className={css.item}>
          СБІ забезпечує студентів проживанням, харчуванням та повертає
          транспортні витрати тим, хто здає іспити даної сесії та здає домашнє
          завдання за минулу сесію
        </li>
      </ul>
    </div>
  );
};

export default Finance;
