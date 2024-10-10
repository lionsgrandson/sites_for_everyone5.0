// ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./ThankYou.css";
import { useTranslation } from "react-i18next";

export default function ThankYou() {
  const { t } = useTranslation();

  return (
    <div className="thankYouContainer">
      <Menu />
      <div className="thankYouContent">
        <h1 className="thankYouTitle">{t("Thank You!")}</h1>
        <p className="thankYouMessage">
          {t("Your message has been sent successfully.")}
        </p>
        <Link to="/contact">
          <Btn bntTxt={t("Go Back")} />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
