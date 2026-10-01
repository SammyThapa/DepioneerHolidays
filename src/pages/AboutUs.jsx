import WhyChooseUs from "../components/WhyChooseUs";
import style from "../css/AboutUs.module.css";
import { motion } from "framer-motion";

function AboutUs() {
  const cards = [
    {
      id: 1,
      number: "01",
      title: "Our Mission",
      p: "To inspire more people to explore the world by making travel accessible, enjoyable, and filled with meaningful experiences.",
    },
    {
      id: 2,
      number: "02",
      title: "Our Vision",
      p: "To create thoughtfully planned journeys that bring together reliable services, memorable experiences, and personalized travel solutions for every traveler.",
    },
    {
      id: 3,
      number: "03",
      title: "Our Promise",
      p: "We are committed to making every journey smooth and dependable through careful planning, transparent communication, and dedicated traveler support.",
    },
  ];

  const expertise = [
    {
      id: 1,
      number: "01",
      title: "Destination Planning",
      p: "We help you choose destinations and experiences that match your interests, travel style, and budget.",
    },
    {
      id: 2,
      number: "02",
      title: "Personalized Journeys",
      p: "Every traveler is different, so we focus on creating flexible itineraries designed around your preferences.",
    },
    {
      id: 3,
      number: "03",
      title: "Travel Support",
      p: "From planning to your journey, we aim to provide dependable communication and support whenever you need it.",
    },
  ];

  return (
    <main className={style.mainCon}>
      <motion.section
        className={style.headingContent}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <span className={style.eyebrow}>ABOUT US</span>

        <h1>
          About <strong>DePioneer Holidays</strong>
        </h1>

        <p>
          DePioneer Holidays is a travel company focused on creating
          thoughtfully planned journeys across India and international
          destinations.
        </p>
      </motion.section>

      <section className={style.aboutSection}>
        <motion.div
          className={style.aboutImage}
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className={style.imagePlaceholder}>
            <span>DePioneer Holidays</span>
          </div>
        </motion.div>

        <motion.div
          className={style.aboutText}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className={style.sectionLabel}>OUR STORY</span>

          <h2>Travel Made Simple & Memorable</h2>

          <p>
            At DePioneer Holidays, we believe that travel is more than simply
            visiting a destination. It is about experiencing new cultures,
            discovering beautiful places, and creating memories that last a
            lifetime.
          </p>

          <p>
            From local Indian getaways to international holidays, we focus on
            creating well-planned travel experiences that combine comfortable
            stays, carefully planned itineraries, and dependable support
            throughout your journey.
          </p>

          <p>
            Whether you are looking for adventure, relaxation, cultural
            experiences, or a holiday with your loved ones, we help turn your
            travel ideas into meaningful journeys.
          </p>
        </motion.div>
      </section>

      <section className={style.valuesSection}>
        <motion.div
          className={style.sectionHeading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <span className={style.sectionLabel}>WHAT DRIVES US</span>

          <h2>Our Mission, Vision & Promise</h2>

          <p>
            The principles behind the experiences we create for every traveler.
          </p>
        </motion.div>

        <div className={style.infoGrid}>
          {cards.map((card, index) => (
            <motion.article
              className={style.infoCard}
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <span>{card.number}</span>

              <h3>{card.title}</h3>

              <p>{card.p}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.section
        className={style.expertiseSection}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div className={style.expertiseTop}>
          <div>
            <span className={style.expertiseLabel}>OUR EXPERTISE</span>

            <h2>
              We Take Care of
              <br />
              <strong>The Journey.</strong>
            </h2>
          </div>

          <p>
            From the first idea to the final journey, we take care of the
            details that make your travel experience smooth and enjoyable.
          </p>
        </div>

        <div className={style.expertiseGrid}>
          {expertise.map((item, index) => (
            <motion.article
              className={style.expertiseCard}
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <span>{item.number}</span>

              <h3>{item.title}</h3>

              <p>{item.p}</p>

              <div className={style.cardLine}></div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <WhyChooseUs />
    </main>
  );
}

export default AboutUs;
