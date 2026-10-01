import style from "../css/WhyChooseUs.module.css";

import { IoIosAirplane } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";

import { motion } from "framer-motion";

function WhyChooseUs() {
  const cards = [
    {
      id: 1,
      number: "01",
      icon: <IoIosAirplane />,
      title: "Personalized Trips",
      para: "Travel plans designed around your interests, budget, and preferred experiences.",
    },
    {
      id: 2,
      number: "02",
      icon: <GiWorld />,
      title: "Hassle-Free Travel",
      para: "From planning to bookings, we handle the details so you can enjoy your journey.",
    },
    {
      id: 3,
      number: "03",
      icon: <BiSupport />,
      title: "Trusted Support",
      para: "Get reliable assistance and guidance throughout your trip whenever you need it.",
    },
  ];

  return (
    <section id="whychooseUs">
      <div className={style.mainCon}>
        {/* =========================
            HEADING
        ========================= */}

        <motion.div
          className={style.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className={style.eyebrow}>WHY DE PIONEER</span>

          <h2>
            Why Choose <strong>Us?</strong>
          </h2>

          <p>
            We make your travel planning simple, reliable, and stress-free. From
            carefully selected destinations to personalized travel experiences,
            we focus on making every journey comfortable and memorable.
          </p>
        </motion.div>

        {/* =========================
            CARDS
        ========================= */}

        <div className={style.cardList}>
          {cards.map((card, index) => (
            <motion.article
              className={style.card}
              key={card.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className={style.cardTop}>
                <span className={style.number}>{card.number}</span>

                <div className={style.icon}>{card.icon}</div>
              </div>

              <h3>{card.title}</h3>

              <p>{card.para}</p>

              <div className={style.cardLine}></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
