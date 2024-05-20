import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/homePage/HomePage";
import ArticlePage from "../pages/eventsDetailsPage/EventsDetailsPage";
import EventsPage from "../pages/eventsPage/EventsPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import AboutPage from "../pages/aboutPage/AboutPage";
import ApplicantsPage from "../pages/applicantsPage/ApplicantsPage";
import MessagePresedentDetailsPage from "../pages/messagePresedentDetailsPage/MessagePresedentDetailsPage";
import HistoryDetailsPage from "../pages/historyDetailsPage/HistoryDetailsPage";
import ContactsPage from "../pages/contactsPage/ContactsPage";
import { Layout } from "./Layout";

function App() {
  return (
    <Suspense>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/applicants" element={<ApplicantsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/events/:eventId" element={<ArticlePage />} />
          <Route
            path="messagePresedent"
            element={<MessagePresedentDetailsPage />}
          />
          <Route path="history" element={<HistoryDetailsPage />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;