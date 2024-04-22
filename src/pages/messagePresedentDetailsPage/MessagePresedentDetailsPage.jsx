import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import css from "./MessagePresedentDetailsPage.module.css";
import { useEffect, useState } from "react";
import { fetchMessagePresedent } from "../../api/news";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const MessagePresedentDetailsPage = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoader(true);

        const resData = await fetchMessagePresedent();
        const { img, text } = resData;

        setImage(img);
        setText(text);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    load();
  }, []);

  return (
    <>
      <Header />
      <div className={css["message-presedent"]}>
        <div className={css["message-presedent-container"]}>
          <div className={css["top-article"]}>
            <h3 className={css.title}>Слово президента СБІ</h3>
            <Link to="/about" className={css["go-back"]}>
              Назад
            </Link>
          </div>
          {loader && <Loader />}
          <img src={`/${image}`} alt="" className={css.image} />
          <p className={css.text}>{text}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MessagePresedentDetailsPage;
