import style from "../css/ContactPopUp.module.css";
import { useState } from "react";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function ContactPopUp() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      className={style.mainCon}
      onMouseEnter={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      {/* Contact tab */}
      <div className={style.contact}>
        <span>CONTACT US</span>
        <FaPhone />
      </div>

      {/* Contact popup */}
      {showDropDown && (
        <div className={style.dropDown}>
          {/* Voice Call */}
          <a href="tel:+919782350083" className={style.contactItem}>
            <div className={`${style.icon} ${style.phone}`}>
              <FaPhone />
            </div>

            <div className={style.info}>
              <span>FOR VOICE CALL</span>
              <strong>+91-7982350083</strong>
            </div>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/4915510822014" className={style.contactItem}>
            <div className={`${style.icon} ${style.whatsapp}`}>
              <FaWhatsapp />
            </div>

            <div className={style.info}>
              <span>WHATSAPP CHAT</span>
              <strong>+49-15510822014</strong>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:info@example.com" className={style.contactItem}>
            <div className={`${style.icon} ${style.email}`}>
              <FaEnvelope />
            </div>

            <div className={style.info}>
              <span>EMAIL US</span>
              <strong>info@example.com</strong>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default ContactPopUp;
