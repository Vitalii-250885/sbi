import Appearance from "../../components/appearance/Appearance";
import Finance from "../../components/finance/Finance";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Requirements from "../../components/requirements/Requirements";
import Rules from "../../components/rules/Rules";

import css from "./ApplicantsPage.module.css";

const applicantsPage = () => {
  return (
    <>
      <Header />
      <div className={css.applicants}>
        <h2 className={css.title}>Абітурієнтам</h2>
        <Requirements />
        <Finance />
        <Appearance />
        <Rules />
      </div>
      <Footer />
    </>
  );
};

export default applicantsPage;
