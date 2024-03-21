import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <h2 className={css.title}>Контакти</h2>
      <ul>
        <li className={css["contacts-item"]}>
          <img
            src="src/images/png-transparent-facebook-logo-computer-icons-facebook-blue-trademark-logo.png"
            alt="facebook"
            className={css.icon}
          />
          <p className={css.description}>Facebook</p>
        </li>
        <li className={css["contacts-item"]}>
          <img
            src="src/images/pngtree-three-dimensional-instagram-icon-png-image_6618437.png"
            alt="Instagram"
            className={css.icon}
          />
          <p className={css.description}>Instagram</p>
        </li>
        <li className={css["contacts-item"]}>
          <img
            src="src/images/png-clipart-telephone-call-computer-icons-symbol-telephone-icon-miscellaneous-logo-thumbnail.png"
            alt="Phone"
            className={css.icon}
          />
          <p className={css.description}>Phone</p>
        </li>
        <li className={css["contacts-item"]}>
          <img src="src/images/email.png" alt="mail" className={css.icon} />
          <p className={css.description}>E-mail</p>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
