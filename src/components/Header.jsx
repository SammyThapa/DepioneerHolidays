import { useState } from "react";
import style from "../css/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <div className={style.headerContainer}>
        <div className={style.flexLogo}>
          <img src={logo} alt="" />
          <h1>DEPIONEER HOLIDAYS INDIA PVT LTD.</h1>
        </div>

        <ul className={style.liItems}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li
            className={style.destinationHover}
            onMouseEnter={() => setShowDropDown(true)}
            onMouseLeave={() => setShowDropDown(false)}
          >
            Destination
            {showDropDown && (
              <ul className={style.dropDown}>
                <li>
                  <Link to="/LocalDestinationpg">Domestic</Link>
                </li>

                <li>
                  <Link to="/InterDestinationpg">International</Link>
                </li>

                <li>
                  <Link to="/PopularDestinationpg">Famous Destinations</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>

          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
