import css from "./Finance.module.css";

const Finance = () => {
  return (
    <div className={css.finance}>
      <h3 className={css.title}>Фінансові питання</h3>
      <ol>
        <li>
          Кожен студент самостійно оплачує за навчання. Сума оплати – 100грн. за
          кожну сесію;
        </li>
        <li>
          СБІ забезпечує студентів проживанням, харчуванням та повертає
          транспортні витрати тим, хто здає іспити даної сесії та здає домашнє
          завдання за минулу сесію
        </li>
      </ol>
    </div>
  );
};

export default Finance;
