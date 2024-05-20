import { Suspense } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </>
  );
};
