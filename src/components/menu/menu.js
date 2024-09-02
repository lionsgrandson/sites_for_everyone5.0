import React, { useState } from "react";
import "./menu.css";
import ILflagImg from "../../img/IlFlagIcon.png";
import Btn from "../btn/btn";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu-div">
      <a
        href="/"
        className="logo-link"
      >
        <h1 className="menu_header">
          S<span>fE</span>
        </h1>
      </a>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`hamburger-bar ${isMenuOpen ? "open" : ""}`}></span>
      </button>

      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li>
            <a href="./about">About</a>
          </li>
          <li>
            <a href="./service">Services</a>
          </li>
          <li>
            <a href="./portfolio">Portfolio</a>
          </li>
          <li>
            <a href="./blog">Blog</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
        </ul>

        <div className="menu-actions">
          <Btn
            btnHref="/contact"
            bntTxt="Get Started"
            WoBcls={false}
            wAoN={true}
          />
          <a
            href="#"
            className="flag-link"
          >
            <img
              src={ILflagImg}
              className="ilFlagNav"
              alt="Israeli Flag Icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
