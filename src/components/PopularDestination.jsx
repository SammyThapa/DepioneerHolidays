import style from "../css/PopularDestination.module.css";
import popjapan from "../assets/popjapan.jpg";
import popswiss from "../assets/popswiss.jpg";
import popnew from "../assets/popnew.jpg";
import popmal from "../assets/popmal.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PopularDestination() {
  const destinations = [
    {
      id: 1,
      image: popjapan,
      title: "Japan",
      location: "Tokyo • Kyoto • Osaka",
      slug: "japan",
      country: "Japan",
    },

    {
      id: 2,
      image: popswiss,
      title: "Switzerland",
      location: "Zurich • Interlaken • Lucerne",
      slug: "switzerland",
      country: "Switzerland",
    },

    {
      id: 3,
      image: popmal,
      title: "Maldives",
      location: "Malé • Maafushi • Hulhumalé",
      slug: "maldives",
      country: "Maldives",
    },

    {
      id: 4,
      image: popnew,
      title: "New Zealand",
      location: "Auckland • Queenstown • Rotorua",
      slug: "newzealand",
      country: "New Zealand",
    },
  ];

  return (
    <section className={style.mainContainer}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className={style.heading}
      >
        <h2>Popular Destinations</h2>
        <p>
          Explore our most popular destinations and discover unforgettable
          experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={style.cardGrid}
      >
        {destinations.map((destination) => (
          <div className={style.card} key={destination.id}>
            <img src={destination.image} alt={destination.title} />

            <div className={style.overlay}></div>

            <div className={style.cardContent}>
              <h3>{destination.title}</h3>

              <p>{destination.location}</p>

              <Link to={`/DestinationBooking/${destination.slug}`}>
                <button>Explore Now</button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Link to={"/PopularDestinationPg"}>
          <button className={style.viewMore}>
            All Popular Destinations <FaArrowRight />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

export default PopularDestination;
