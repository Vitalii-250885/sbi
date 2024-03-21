import css from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <h2 className={css.title}>Відгуки студентів</h2>
      <img
        src="src/images/photo_2024-03-21_19-42-09_small.jpg"
        alt="Baklitska Anna"
        className={css.photo}
      />
      <article className={css.article}>
        СБІ - це неймовірно особливе місце для мене та мого духовного розвитку.
        Серед усієї буденності, проблем цього світу та тривог - це ніби тиждень
        життя на Фаворі, серед своїх братів та сестер, під Божою рукою. Господь
        особливо говорить до мого серця кожну сесію. Те, про що я переживаю та
        нікому не кажу - Бог знає та показує Свою волю, втіху чи вирішення
        питань через предмети, які ми вивчаємо, через проповіді, спілкування чи
        особисті свідоцтва інших студентів. СБІ - це моє особисте благословіння
        в наш час.
        <p className={css.sign}>Анна Баклицька</p>
      </article>
    </div>
  );
};

export default Testimonials;
