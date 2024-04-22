import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <ul className={css["contacts-list"]}>
        <li className={css["contacts-item"]}>
          <a href="https://www.facebook.com/sbiukraine?locale=uk_UA">
            <img src="facebook.png" alt="facebook" className={css.icon} />
          </a>
        </li>
        <li className={css["contacts-item"]}>
          <a href="https://www.instagram.com/sbiukr/">
            <img src="instagram.png" alt="Instagram" className={css.icon} />
          </a>
        </li>
        {/* <li className={css["contacts-item"]}>
          <img
            src="/png-clipart-telephone-call-computer-icons-symbol-telephone-icon-miscellaneous-logo-thumbnail.png"
            alt="Phone"
            className={css.icon}
          />
        </li>
        <li className={css["contacts-item"]}>
          <img src="/email.png" alt="mail" className={css.icon} />
        </li> */}
      </ul>
    </div>
  );
};

export default Footer;
