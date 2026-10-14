import { useState } from "react";
import style from "../css/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    menuOpen(false);
  };

  return (
    <div>
      <div className={style.headerContainer}>
        <div className={style.flexLogo}>
          <img src={logo} alt="" onClick={closeMenu} />
          <h1>DEPIONEER HOLIDAYS INDIA PVT LTD.</h1>
        </div>

        {/* Hamburger */}
        <button
          className={`${style.menuButton} ${menuOpen ? style.menuOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${style.liItems} ${menuOpen ? style.listOpen : ""}`}>
          <li>
            <Link to={"/"} onClick={closeMenu}>
              Home
            </Link>
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
                  <Link to="/LocalDestinationpg" onClick={closeMenu}>
                    Domestic
                  </Link>
                </li>

                <li>
                  <Link to="/InterDestinationpg" onClick={closeMenu}>
                    International
                  </Link>
                </li>

                <li>
                  <Link to="/PopularDestinationpg" onClick={closeMenu}>
                    Famous Destinations
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/AboutUs" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
