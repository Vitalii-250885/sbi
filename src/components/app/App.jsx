import HomePage from "../../pages/homePage/HomePage";
import NewsPage from "../../pages/newsPage/NewsPage";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import About from "../about/About";

// import Testimonials from "../testimonials/Testimonials";
// import Contacts from "../contacts/Contacts";
// import Footer from "../footer/Footer";
// import About from "../about/About";

import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <div className={css.body}>
        <div className={css.container}>
          <News />

          
          <Testimonials />
          <Contacts />
        </div>
      </div>

      
      <div
        className={clsx(css["btn-up"], scroll < 300 && css["btn-up_hide"])}
        onClick={handlerScrollUp}></div> */}
    </>
  );
}

export default App;
