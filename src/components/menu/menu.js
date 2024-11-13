import React, { useState } from "react";
import "./menu.css";
import Btn from "../btn/btn";
import LanguageSwitcher from "../../LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Menu(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`menu-div ${isMenuOpen ? "open" : ""} ${props.ser}`}>
      <div className="outerDiv-Menu">
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
      </div>

      <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li>
            <a href="./service">{t("Services")}</a>
          </li>
          <li>
            <a href="./about">{t("About")}</a>
          </li>

          <li>
            <a href="./portfolio">{t("Portfolio")}</a>
          </li>
          {/* <li>
            <a href="./blog">{t("Blog")}</a>
          </li> */}
          <li>{/* <a href="./contact">{t("Contact")}</a> */}</li>
        </ul>

        <div className="menu-actions">
          <Btn
            btnHref="/contact"
            bntTxt={t("Get Started")}
            WoBcls={false}
            wAoN={false}
          />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
