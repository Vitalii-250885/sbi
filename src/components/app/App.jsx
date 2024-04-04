import Header from "../header/Header";
import Testimonials from "../testimonials/Testimonials";
import Contacts from "../contacts/Contacts";
import Footer from "../footer/Footer";
import News from "../news/News";
import About from "../about/About";

import css from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={css.body}>
        <div className={css.container}>
          <News />

          <About />
          <Testimonials />
          <Contacts />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
