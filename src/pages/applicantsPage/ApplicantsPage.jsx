import Appearance from "../../components/appearance/Appearance";
import Finance from "../../components/finance/Finance";
import Requirements from "../../components/requirements/Requirements";
import Rules from "../../components/rules/Rules";

import css from "./ApplicantsPage.module.css";

const applicantsPage = () => {
  return (
    <>
      <div className={css.applicants}>
        <h2 className={css.title}>Абітурієнтам</h2>
        <Requirements />
        <Finance />
        <Appearance />
        <Rules />
      </div>
    </>
  );
};

export default applicantsPage;
