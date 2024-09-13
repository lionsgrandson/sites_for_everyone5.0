// Footer.jsx
import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footerContainer">
      <div className="footerDiv">
        <div className="footerSection">
          <h3 className="footerH3">{t("Sites for Everyone")}</h3>
          <ul>
            <li>{t("Sites for Everyone")}</li>
            {/* <li>Tartzav 12</li> */}
            <li>{t("Holon Israel")}</li>
            <li className="socialsLi">
              <a
                href="https://www.instagram.com/moshe_blackberg/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/moshe-schwartzberg-ab54401a7/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/MosheBlackberg"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerH3">{t("Navigation")}</h3>
          <ul className="footerSubMenu">
            <li>
              <a href="/">{t("Home")}</a>
            </li>
            <li>
              <a href="/about">{t("About")}</a>
            </li>
            <li>
              <a href="/service">{t("Services")}</a>
            </li>
            <li>
              <a href="/portfolio">{t("Portfolio")}</a>
            </li>
            <li>
              <a href="/blog">{t("Blog")}</a>
            </li>
            <li>
              <a href="/contact">{t("Contact")}</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerH3">{t("Support")}</h3>
          <ul className="footerSubMenu">
            <li>
              <a href="/contact">{t("Support")}</a>
            </li>
            <li>
              <a href="/contact">{t("Contact us")}</a>
            </li>
            <li>
              <a href="/contact">{t("Open Positions")}</a>
            </li>
          </ul>
        </div>
        <div className="footerSection">
          <h3 className="footerH3">{t("Legal")}</h3>
          <ul className="footerSubMenu">
            <li>
              <a href="/terms">{t("Terms and Conditions")}</a>
            </li>
            <li>
              <a href="/privacylol">{t("Privacy Policy")}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © {Year} {t("Sites for Everyone, all rights reserved.")}
      </p>
    </footer>
  );
}
