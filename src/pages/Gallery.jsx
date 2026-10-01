import { galleryDestinations } from "../Data/galleryDes";
import { Link } from "react-router-dom";
import style from "../css/Gallery.module.css";
import { useState } from "react";

import { motion } from "framer-motion";

function Gallery() {
  const [sortState, setSortState] = useState("All");

  const filteredDestinations =
    sortState === "All"
      ? galleryDestinations
      : galleryDestinations.filter((des) => des.category.includes(sortState));

  return (
    <section className={style.mainContainer}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={style.heading}
      >
        <span>TRAVEL GALLERY</span>

        <h1>
          Explore the <strong>World</strong>
        </h1>

        <p>
          Take a visual journey through some of the world's most beautiful
          destinations and discover places worth experiencing.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={style.sorting}
      >
        <label htmlFor="sort">Sort by:</label>
        <select
          name="sort"
          id="sort"
          value={sortState}
          onChange={(e) => setSortState(e.target.value)}
        >
          <option value="All">All</option>
          <option value="local">Local</option>
          <option value="international">International</option>
          <option value="popular">Popular</option>
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className={style.galleryGrid}
      >
        {filteredDestinations.map((des) => (
          <Link
            to={`/gallery/${des.slug}`}
            className={style.galleryCard}
            key={des.id}
          >
            <img src={des.image} alt={des.title} />

            <div className={style.overlay}></div>

            <div className={style.cardContent}>
              <span>{des.region}</span>

              <h2>{des.title}</h2>

              <p>{des.description}</p>

              <div className={style.explore}>Explore Destination →</div>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery;
