import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import style from "../css/InterDesPage.module.css";
import { useState } from "react";
import { internationalDestinations } from "../Data/internationalDes";
import { motion } from "framer-motion";

function InterDesPage() {
  const [destination, setDestination] = useState(internationalDestinations);
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (search.trim() === "") {
      setDestination(internationalDestinations);
      return;
    }
    const filterSearch = internationalDestinations.filter(
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
          Explore <strong>Famous International Places</strong>
        </h2>
        <p>
          Explore our most popular destinations and discover unforgettable
          experiences.
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
              <img src={place.image} alt="UK image" />
              <Link to={`/DestinationBooking/${place.slug}`}>
                <h3>{place.title}</h3>
              </Link>
              <p className="flex justify-start items-center gap-2">
                <IoLocationSharp />
                {place.location}
              </p>
              <p>{`Price:${place.price}`}</p>
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

export default InterDesPage;
