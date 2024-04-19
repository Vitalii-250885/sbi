import { Suspense } from "react";
import HomePage from "../../pages/homePage/HomePage";
import ArticlePage from "../../pages/newsDetailsPage/NewsDetailsPage";
import NewsPage from "../../pages/newsPage/NewsPage";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import About from "../about/About";

import { Route, Routes } from "react-router-dom";
import MessagePresedentDetailsPage from "../../pages/messagePresedentDetailsPage/MessagePresedentDetailsPage";
import HistoryDetailsPage from "../../pages/historyDetailsPage/HistoryDetailsPage";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/news/:newsId" element={<ArticlePage />} />
        <Route
          path="/messagePresedent"
          element={<MessagePresedentDetailsPage />}
        />
        <Route path="/history" element={<HistoryDetailsPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
