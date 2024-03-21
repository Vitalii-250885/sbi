import Header from "../header/Header";
import WordPresedent from "../word-presedent/WordPresedent";
import Testimonials from "../testimonials/Testimonials";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
import News from "../news/News";

import css from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={css.body}>
        <div className={css["left-area"]}>
          <WordPresedent />
          <Testimonials />
          <Contacts />
        </div>
        <div className={css["right-area"]}>
          <News />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
