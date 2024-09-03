import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ILflagImg from "./img/IlFlagIcon.png"; // Path to your Israeli flag image
import USflagImg from "./img/USFlag.jpg"; // Path to your U.S. flag image
import "./langSwtich.css"; // Ensure the filename matches

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "he" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    // Set the direction attribute on the HTML element
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
    // Optionally set the lang attribute for accessibility
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
      {i18n.language === "en" ? (
        <a
          href="#"
          onClick={toggleLanguage}
          className="flag-link"
        >
          <img
            src={ILflagImg}
            className="ilFlagNav"
            alt="Israeli Flag Icon"
          />
        </a>
      ) : (
        <a
          href="#"
          onClick={toggleLanguage}
          className="flag-link"
        >
          <img
            src={USflagImg}
            className="usFlagNav"
            alt="U.S. Flag Icon"
          />
        </a>
      )}
    </div>
  );
}

export default LanguageSwitcher;
