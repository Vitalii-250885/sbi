import css from "./Appearance.module.css";

const Appearance = () => {
  return (
    <div className={css.appearance}>
      <h3 className={css.title}>Зовнішній вигляд</h3>
      <h4 className={css.subtitle}>Брати:</h4>
      <ul>
        <li className={css.item}>Сорочки мають бути завжди з комірцями;</li>
        <li className={css.item}>
          Не дозволяється під час занять носити джинси;
        </li>
        <li className={css.item}>
          Заборонено носити спортивний та неофіційний (вільний) одяг;
        </li>
        <li className={css.item}>
          Чоловіки повинні бути гладенько поголені, а бороди мають бути
          акуратними;
        </li>
        <li className={css.item}>
          Волосся має бути підстрижене вище вух та комірця.
        </li>
      </ul>

      <h4 className={css.subtitle}>Сестри:</h4>
      <ul>
        <li className={css.item}>
          Замужні жінки повинні покривати голову платком;
        </li>
        <li className={css.item}>
          Блузка повинна мати достатньо довгі рукави;
        </li>
        <li className={css.item}>
          Заборонено одягати тонкі блузки, що просвічуються;
        </li>
        <li className={css.item}>
          Спідниці та сукні повинні бути пристойними та скромними, що не
          облягають. Теж саме стосується і кофтинок;
        </li>
        <li className={css.item}>
          Взагалі забороняється носити штани – лише спідниці та сукні.
        </li>
      </ul>

      <h4 className={css.subtitle}>
        Причини того, чому ми повинні так одягатися:
      </h4>
      <ul>
        <li className={css.item}>
          Ми – християни! Християни повинні виглядати, як християни! Світ
          повинен бачити, що ми являємося християнами.
        </li>
        <li className={css.item}>Звичайний одяг справляє звичайне враження!</li>
        <li className={css.item}>Ми – воїни Христа! Воїни носять уніформу.</li>
        <li className={css.item}>
          Писання говорить: «Не любіть світу, ані того, що в світі. Коли любить
          хто світ, у тім немає любови Отцівської, бо все, що в світі:
          пожадливість тілесна, і пожадливість очам, і пиха життєва, це не від
          Отця, а від світу. Мінається і світ, і його пожадливість, а хто Божу
          волю виконує, той повік пробуває!» 1 Івана 2:15–17
        </li>
      </ul>
    </div>
  );
};

export default Appearance;
