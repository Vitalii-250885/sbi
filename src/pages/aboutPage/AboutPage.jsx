import History from "../../components/history/History";
import Team from "../../components/team/Team";
import Believe from "../../components/believe/Believe";
import Program from "../../components/program/Program";
import MessagePresedent from "../../components/messagePresedent/MessagePresedent";
import SlickSlider from "../../components/slickSlider/SlickSlider";

import css from "./AboutPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

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
        <Believe />
        <Program />
        <SlickSlider />
      </div>
      <Footer />
    </>
  );
};

export default About;
