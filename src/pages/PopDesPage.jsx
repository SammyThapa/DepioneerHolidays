import { useState } from "react";
import { destinations } from "../Data/destination";
import style from "../css/PopDesPage.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PopDesPage() {
  const [destination, setDestination] = useState(destinations);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (search.trim() === "") {
      setDestination(destinations);
      return;
    }

    const filterSearch = destinations.filter(
      (dest) =>
        dest.title.toLowerCase().includes(value.toLowerCase()) ||
        dest.country.toLowerCase().includes(value.toLowerCase()),
    );

    setDestination(filterSearch);
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className={style.mainContainer}
    >
      <div className={style.heading}>
        <h2>
          Famous <strong>Destinations</strong> Places
        </h2>

        <p>
          Explore our most popular destinations and discover unforgettable
          experiences around the world.
        </p>
      </div>
      <input
        type="text"
        value={search} // takes input from state search, now react controls it
        placeholder="Search destination..."
        onChange={(e) => handleSearch(e.target.value)} //sents input to function
        className={style.inputField}
      />
      <div className={style.cardGrid}>
        {destination.map((dest) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className={style.card}
            key={dest.id}
          >
            <img src={dest.image} alt={dest.title} />

            <div className={style.overlay}></div>

            <div className={style.cardContent}>
              <h3>{dest.title}</h3>
              <p>{dest.location}</p>
              <Link to={`/DestinationBooking/${dest.slug}`}>
                <button>Explore Now</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default PopDesPage;
