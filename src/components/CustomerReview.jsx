import style from "../css/CustomerReview.module.css";
import { motion } from "framer-motion";

function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: "Lisa M.",
      profession: "Traveler",
      rating: 5,
      quote:
        "DePioneer made our international trip incredibly smooth. Everything was handled professionally from start to finish.",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      profession: "Traveler",
      rating: 5,
      quote:
        "The entire process was simple and stress-free. Their team was helpful throughout our journey.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      profession: "Tourist",
      rating: 5,
      quote:
        "Excellent service and great communication. I would definitely recommend DePioneer for travel planning.",
    },
  ];

  return (
    <section className={style.mainContainer}>
      {/* =========================
          HEADING
      ========================= */}

      <motion.div
        className={style.heading}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className={style.eyebrow}>TRAVELER EXPERIENCES</span>

        <h2>
          What Our <strong>Customers</strong> Say
        </h2>

        <p>
          See what our customers have to say about their experience with
          DePioneer Holidays.
        </p>
      </motion.div>

      {/* =========================
          REVIEWS
      ========================= */}

      <div className={style.reviewGrid}>
        {reviews.map((review, index) => (
          <motion.article
            className={style.card}
            key={review.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            {/* Rating */}

            <div className={style.rating}>{"★".repeat(review.rating)}</div>

            {/* Quote */}

            <div className={style.quote}>
              <span className={style.quoteMarkLeft}>“</span>

              <p>{review.quote}</p>

              <span className={style.quoteMarkRight}>”</span>
            </div>

            {/* Customer */}

            <div className={style.customer}>
              <div className={style.avatar}>{review.name.charAt(0)}</div>

              <div>
                <h3>{review.name}</h3>
                <p>{review.profession}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default CustomerReview;
