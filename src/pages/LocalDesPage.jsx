import style from "../css/LocalDesPage.module.css";

import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { localDestinations } from "../Data/localDes";
import { motion } from "framer-motion";

function LocalDesPage() {
  const [destination, setDestination] = useState(localDestinations);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (value.trim() === "") {
      setDestination(localDestinations);
      return;
    }

    const filterSearch = localDestinations.filter(
      (place) =>
        place.title.toLowerCase().includes(value.toLowerCase()) ||
        place.location.toLowerCase().includes(value.toLowerCase()),
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
          Explore <strong>Famous Indian Places</strong>
        </h2>

        <p>
          Discover India's most beautiful destinations, rich cultures, and
          unforgettable travel experiences.
        </p>
      </div>

      <input
        type="text"
        value={search}
        placeholder="Search destination"
        className={style.inputField}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className={style.cardGrid}>
        {destination.map((place) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className={style.card}
              key={place.id}
            >
              <img src={place.image} alt={place.title} />

              <Link to={`/DestinationBooking/${place.slug}`}>
                <h3>{place.title}</h3>
              </Link>

              <p className="flex justify-start items-center gap-2">
                <IoLocationSharp />
                {place.location}
              </p>

              <p>{`Price: ${place.price}`}</p>

              <Link to={`/DestinationBooking/${place.slug}`}>
                <button className={style.showMore}>Explore Now</button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default LocalDesPage;
