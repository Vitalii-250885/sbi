import History from "../history/History";
import Team from "../team/Team";
import Believe from "../believe/Believe";
import Program from "../program/Program";
import MessagePresedent from "../messagePresedent/MessagePresedent";

import css from "./About.module.css";

const About = () => {
  return (
    <div className={css.about}>
      <h2 className={css.title}>Про нас</h2>
      <MessagePresedent />
      <History />
      <Team />
      <Believe />
      <Program />
    </div>
  );
};

export default About;
