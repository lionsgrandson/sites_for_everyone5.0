import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./contact.css";
import "../components/btn/btn.css";
import ContactForm from "../components/contactForm/contactForm";
export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contactContainer">
      <Menu />
      <h3 className="contactH3">{t("Let us know how we can help")}</h3>
      <h1 className="contacth1">{t("Contact Us")}</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}
