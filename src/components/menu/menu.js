import React, { useState } from "react"; // Import useState for managing state
import "./menu.css";
import ILflagImg from "../../img/IlFlagIcon.png";
import Btn from "../btn/btn";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="menu-div">
      <a href="/">
        <h1 className="menu_header">
          S<span>fE</span>
        </h1>
      </a>

      {/* Hamburger Button for Smaller Screens */}
      <button
        className="hamburger"
        onClick={toggleMenu}
      >
        {/* Icon for the hamburger (3 bars) */}
        <span
          className={isMenuOpen ? "hamburger-bar open" : "hamburger-bar"}
        ></span>
        <span
          className={isMenuOpen ? "hamburger-bar open" : "hamburger-bar"}
        ></span>
        <span
          className={isMenuOpen ? "hamburger-bar open" : "hamburger-bar"}
        ></span>
      </button>

      {/* Menu List, visible only when menu is open or on larger screens */}
      <ul className={`menu-list ${isMenuOpen ? "open" : ""}`}>
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

      <div className="CalltoActionNav">
        <a href="/contact">Get Started</a>
      </div>
      <a href="#">
        <img
          src={ILflagImg}
          className="ilFlagNav"
          alt="Israeli Flag Icon"
        />
      </a>
    </div>
  );
}
