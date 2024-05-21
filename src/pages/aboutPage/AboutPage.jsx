import History from "../../components/history/History";
import Team from "../../components/team/Team";
import Believe from "../../components/believe/Believe";
import Program from "../../components/program/Program";
import MessagePresedent from "../../components/messagePresedent/MessagePresedent";
import Testimonials from "../../components/testimonials/Testimonials";

import css from "./AboutPage.module.css";
import Counter from "../../components/counter/Counter";

const About = () => {
  return (
    <>
      <div className={css.about}>
        <h2 className={css.title}>Про нас</h2>
        <div className={css.articles}>
          <MessagePresedent />
          <History />
        </div>
        <Team />
        <Believe />
        <Program />
        <Testimonials />
        <Counter />
      </div>
    </>
  );
};

export default About;
