import React, { useState, useEffect } from "react";
import { Button } from "./button.js";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/vishaljha2121.github.io"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            VISHAL JHA
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-tiems" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/vishaljha2121.github.io"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Contact me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">CONTACT ME</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
