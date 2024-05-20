import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from "../../testimonials.json";

import css from "./Testimonials.module.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 30000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };
  return (
    <div className={css.testimonials}>
      <h3 className={css.title}>Відгуки студентів</h3>
      <div className={css["slider-container"]}>
        <Slider {...settings}>
          {testimonials.map(({ id, photo, name, article }) => (
            <div key={id}>
              <img src={photo} alt={name} className={css.photo} />
              <p className={css.text}>{article}</p>
              <p className={css.name}>{name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
