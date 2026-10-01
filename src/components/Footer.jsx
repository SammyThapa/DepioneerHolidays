import { Link } from "react-router-dom";
import style from "../css/Footer.module.css";
import logo from "../assets/logo.png";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { Popdestinations } from "../Data/popularDes";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        {/* Contact */}
        <div className={style.contactSection}>
          <div className={style.contactItem}>
            <FaMapMarkerAlt />
            <p>Depioneer Holiday</p>
          </div>

          <div className={style.contactItem}>
            <FaPhone />
            <p>+91 8448 348 987</p>
          </div>

          <div className={style.contactItem}>
            <FaEnvelope />
            <p>DepioneerHoliday@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className={style.socials}>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
          <div className={style.footerLogo}>
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Useful Links */}
        <div className={style.linkSection}>
          <h2>Useful Links</h2>

          <Link to="/aboutUs">About Us</Link>

          <Link to="/PopularDestinationpg">Destinations</Link>

          <a href="/#whychooseUs">Why Choose Us</a>

          <Link to="/enquiry">Contact Us</Link>
        </div>

        {/* Destinations */}
        <div className={style.destinationSection}>
          <h2>Destinations</h2>

          <div className={style.destinationGrid}>
            {Popdestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/DestinationBooking/${destination.slug}`}
              >
                {destination.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={style.copyright}>
        <p>© Copyright Depioneer Holiday 2026. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
