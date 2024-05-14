import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import css from "./ApplicantsPage.module.css";

const applicantsPage = () => {
  return (
    <>
      <Header />
      <div className={css.applicants}>
        <h2 className={css.title}>Абітурієнтам</h2>
      </div>
      <Footer />
    </>
  );
};

export default applicantsPage;
