import History from "../history/History";
import Team from "../team/Team";
import Believe from "../believe/Believe";
// import Program from "../program/Program";
import MessagePresedent from "../messagePresedent/MessagePresedent";

import css from "./About.module.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import SlickSlider from "../slickSlider/SlickSlider";

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
        <SlickSlider />

        {/* <Program /> */}

        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img
              src="/photo_2024-03-21_19-42-09_small.jpg"
              alt="Анна Баклицька"
            />
            <h4>Анна Баклицька</h4>
            <p>
              СБІ - це неймовірно особливе місце для мене та мого духовного
              розвитку. Серед усієї буденності, проблем цього світу та тривог -
              це ніби тиждень життя на Фаворі, серед своїх братів та сестер, під
              Божою рукою. Господь особливо говорить до мого серця кожну сесію.
              Те, про що я переживаю та нікому не кажу - Бог знає та показує
              Свою волю, втіху чи вирішення питань через предмети, які ми
              вивчаємо, через проповіді, спілкування чи особисті свідоцтва інших
              студентів. СБІ - це моє особисте благословіння в наш час.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/IMG_20230425_104029_286_edited.jpeg"
              alt="Ожеред Ірина"
            />
            <h4>Ожеред Ірина</h4>
            <p>
              СБІ – це особлива частина мого життя. Місце де Бог по-особливому
              працює в моєму серці, де я надбала нових друзів. Місце, де я
              надихаюсь служити іншим людям і присвячувати себе служінню Богу.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Victor_small.jpg" alt="Віктор Харченко" />
            <h4>Віктор Харченко</h4>
            <p>
              Навчання в СБІ, перш за все, це чудова можливість духовно
              зростати, пізнавати Бога, та вивчати Його слово. Тут поряд завжди
              є хороші викладачі, які докладуть для цього усі свої зусилля.
              Також, це можливість добре провести час, та поспілкуватися з
              друзями. Тому, якщо вам хочеться більше пізнавати Бога, служити
              Йому, та зростати як християнин, то не втрачайте цю можливість.
              Доєднуйтесь до нас!
            </p>
          </SwiperSlide>
        </Swiper> */}

        {/* Swiper */}
      </div>
      <Footer />
    </>
  );
};

export default About;
