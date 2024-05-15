import css from "./Team.module.css";

const Team = () => {
  return (
    <div className={css.team}>
      <h3 className={css.title}>Наша команда</h3>
      <ul className={css["team-list"]}>
        <li className={css["team-item"]}>
          <img src="/IMG_9681_small.jpg" alt="" className={css.image} />
          <p className={css.name}>Дерек Томас</p>
          <p>Президент СБІ</p>
        </li>
        <li className={css["team-item"]}>
          <img
            src="/Karl_small.jpg"
            alt="Карл Ліндерман"
            className={css.image}
          />
          <p className={css.name}>Карл Ліндерман</p>
          <p>Заступник президента СБІ</p>
        </li>
        <li className={css["team-item"]}>
          <img src="/DAS03987_small.jpg" alt="" className={css.image} />
          <p className={css.name}>Парфенюк</p>
          <p className={css.name}>Павло Васильович</p>
          <p>Викладач, Перекладач</p>
        </li>
        <li className={css["team-item"]}>
          <img src="/Kolya 200x200.jpg" alt="" className={css.image} />
          <p className={css.name}>Мовчан</p>
          <p className={css.name}>Микола Миколайович</p>
          <p>Декан</p>
        </li>
        <li className={css["team-item"]}>
          <img
            src="/Janna_small.jpg"
            alt="Процишина Жанна"
            className={css.image}
          />
          <p className={css.name}>Процишина</p>
          <p className={css.name}>Жанна Миколаївна</p>
          <p>Секретар</p>
        </li>
        <li className={css["team-item"]}>
          <img src="/vitalii_small.jpg" alt="" className={css.image} />
          <p className={css.name}>Процько</p>
          <p className={css.name}>Віталій Олександрович</p>
          <p>Музичний керівник</p>
        </li>
      </ul>
    </div>
  );
};

export default Team;
