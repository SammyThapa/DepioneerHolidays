import style from "../css/InternationalTourDes.module.css";
import JapanImg from "../assets/japan.jpg";
import ItalyImg from "../assets/italy.jpg";
import SwitzerlandImg from "../assets/switzerland.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function InternationalTourDes() {
  const internationalPlaces = [
    {
      id: 1,
      image: JapanImg,
      title: "Japan: Land of the Rising Sun",
      location: "Japan",
      price: "₹1,50,000-₹1,80,000",
      slug: "japan",
      country: "Japan",
    },

    {
      id: 2,
      image: ItalyImg,
      title: "Italy: Art, Culture & Adventure",
      location: "Italy",
      price: "₹1,30,000-₹1,80,000",
      slug: "italy",
      country: "Italy",
    },

    {
      id: 3,
      image: SwitzerlandImg,
      title: "Switzerland: Alpine Escape",
      location: "Switzerland",
      price: "₹1,80,000-₹2,50,000",
      slug: "switzerland",
      country: "Switzerland",
    },
  ];
  return (
    <section id="international">
      <div className={style.mainCon}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={style.content}
        >
          <h2>
            Explore the <span className={style.World}>World</span> with Us
          </h2>
          <p>
            Discover international destinations with Deepioner Holidays through
            thoughtfully planned tour packages designed for comfortable,
            memorable, and hassle-free journeys. From vibrant cities and
            tropical beaches to breathtaking landscapes and unique cultures,
            explore the world with travel experiences tailored to your journey.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={style.cardGrid}
        >
          {internationalPlaces.map((place) => {
            return (
              <div className={style.card} key={place.id}>
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
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Link to={"/InterDestinationpg"}>
            <button className={style.viewMore}>
              All International Destinations <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default InternationalTourDes;
