import { useId } from "react";

import TestimonialsItem from "./testimonialsItem/TestimonialsItem";

import testimonials from "../../testimonials.json";

import css from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonialsId = useId();

  return (
    <div className={css.testimonials}>
      <h2 className={css.title}>Відгуки студентів</h2>
      <ul className={css.list}>
        {testimonials.map((item) => (
          <TestimonialsItem key={testimonialsId} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
