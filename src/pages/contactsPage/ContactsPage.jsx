import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <div className={css.contacts}>
        <div className={css["contacts-options"]}>
          <h2 className={css.title}>Контакти</h2>
          <ul className={css["contacts-list"]}>
            <li className={css["contacts-item"]}>
              <a
                href="https://www.facebook.com/sbiukraine?locale=uk_UA"
                target="_blank">
                <img
                  src="/img/footer/facebook.png"
                  alt="facebook"
                  className={css.icon}
                />
                sbiukraine
              </a>
            </li>
            <li className={css["contacts-item"]}>
              <a href="https://www.instagram.com/sbiukr/" target="_blank">
                <img
                  src="/img/footer/instagram.png"
                  alt="Instagram"
                  className={css.icon}
                />
                sbiukr
              </a>
            </li>
            <li className={css["contacts-item"]}>
              <a href="mailto:sbi.in.ua@gmail.com">
                <img
                  src="/img/footer/mail.png"
                  alt="mail"
                  className={css.icon}
                />
                sbi.in.ua@gmail.com
              </a>
            </li>
            <li className={css["contacts-item"]}>
              <a href="tel:+380683689307">
                <img
                  src="/img/footer/phone.png"
                  alt="Phone"
                  className={css.icon}
                />
                068-368-93-07
              </a>
            </li>
            <li className={css["contacts-item"]}>
              <a href="tel:+380996193161">
                <img
                  src="/img/footer/phone.png"
                  alt="Phone"
                  className={css.icon}
                />
                099-619-31-61 (Viber, Telegram)
              </a>
            </li>
          </ul>
          <p className={css.text}>
            *Дзвінки приймаються Пн-Пт з 10:00 до 18:00
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
