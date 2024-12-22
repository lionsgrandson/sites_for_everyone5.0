import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import Btn from "../components/btn/btn";
import "./NotFound.css";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="notFoundContainer">
      <Menu />
      <div className="notFoundContent">
        <h1>{t("Oops! Page Not Found")}</h1>
        <p>{t("The customer took down the website.")}</p>
        <Link to="/">
          <Btn bntTxt={t("Go Back")} />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
