import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <div className={css.contacts}>
        <h2 className={css.title}>Контакти</h2>
        {/* <div className={css["contacts-options"]}> */}
        {/* <ul className={css["contacts-list"]}>
          <li className={css["contacts-item"]}>
            <a href="https://www.facebook.com/sbiukraine?locale=uk_UA">
              <img
                src="/img/footer/facebook.png"
                alt="facebook"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="https://www.instagram.com/sbiukr/">
              <img
                src="/img/footer/instagram.png"
                alt="Instagram"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="tel:+380683689307">
              <img
                src="/img/footer/phone.png"
                alt="Phone"
                className={css.icon}
              />
            </a>
          </li>
          <li className={css["contacts-item"]}>
            <a href="mailto:">
              <img src="/img/footer/mail.png" alt="mail" className={css.icon} />
            </a>
          </li>
        </ul> */}
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
