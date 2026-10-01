import { useParams } from "react-router-dom";
import { galleryDestinations } from "../Data/galleryDes";
import style from "../css/GalleryDestination.module.css";

import { motion } from "framer-motion";

function GalleryDestination() {
  const { slug } = useParams();

  const clickedDes = galleryDestinations.find((des) => des.slug === slug);

  if (!clickedDes) {
    return <h2>Destination not found</h2>;
  }

  return (
    <section className={style.mainContainer}>
      {/* Destination Heading */}
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
        <h1>{clickedDes.title}</h1>

        <p>{clickedDes.description}</p>
      </motion.div>

      {/* Places to Visit */}
      <div className={style.placesGrid}>
        {clickedDes.placesToVisit?.map((place) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className={style.placeCard}
            key={place.name}
          >
            <h2>{place.name}</h2>

            <p>{place.description}</p>

            {/* 3 Images */}
            <div className={style.imageGrid}>
              {place.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${place.name} ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default GalleryDestination;
