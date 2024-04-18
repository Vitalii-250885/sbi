import History from "../history/History";
import Team from "../team/Team";
import Believe from "../believe/Believe";
// import Program from "../program/Program";
import MessagePresedent from "../messagePresedent/MessagePresedent";

import css from "./About.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className={css.about}>
        <h2 className={css.title}>Про нас</h2>
        <div className={css.articles}>
          <MessagePresedent />
          <History />
        </div>

        <Team />
        {/* <Testimonials /> */}
        <Believe />
        {/* <Program /> */}
      </div>
      <Footer />
    </>
  );
};

export default About;
