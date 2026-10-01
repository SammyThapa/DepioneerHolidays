import style from "../css/IndiaTourDes.module.css";
import KeralaImg from "../assets/popkerela.jpg";
import AndamanImg from "../assets/popandaman.jpg";
import RajasthanImg from "../assets/poprajasthan.jpg";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function IndiaTourDes() {
  const indianPlaces = [
    {
      id: 1,
      image: KeralaImg,
      title: "Kerala: God's Own Country",
      location: "Munnar • Alleppey • Kochi",
      price: "₹25,000-₹45,000",
      slug: "kerala",
      country: "India",
    },

    {
      id: 2,
      image: AndamanImg,
      title: "Andaman: Tropical Island Escape",
      location: "Port Blair • Havelock • Neil Island",
      price: "₹40,000-₹65,000",
      slug: "andaman",
      country: "India",
    },

    {
      id: 3,
      image: RajasthanImg,
      title: "Rajasthan: Royal Heritage & Culture",
      location: "Jaipur • Udaipur • Jaisalmer",
      price: "₹25,000-₹45,000",
      slug: "rajasthan",
      country: "India",
    },
  ];
  return (
    <section id="local">
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
            Explore <span className={style.India}>India</span> with Us
          </h2>
          <p>
            Discover India with Deepioner Holidays through thoughtfully planned
            tour packages designed to make every journey comfortable, memorable,
            and hassle-free. From breathtaking mountains and beautiful beaches
            to historic cities and rich cultural experiences, explore India with
            a travel plan tailored to your journey.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={style.cardGrid}
        >
          {indianPlaces.map((place) => {
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <Link to={"/LocalDestinationPg"}>
            <button className={style.viewMore}>
              All Local Destinations <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default IndiaTourDes;
