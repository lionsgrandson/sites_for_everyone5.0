// import React, { useState, useRef } from "react";
// import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import emailjs from "@emailjs/browser";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./contact.css";
import "../components/btn/btn.css";
import ContactForm from "../components/contactForm/contactForm";
import { Helmet } from "react-helmet-async";
export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contactContainer">
      <Helmet>
        <title>Contact Moshe Schwartzberg | Full-Stack Developer</title>
        <meta
          name="description"
          content="Get in touch with Moshe Schwartzberg for custom app and CRM solutions. Email or call to start your project today!"
        />
        <meta
          name="keywords"
          content="contact developer Israel, Moshe Schwartzberg contact, custom app development, CRM solutions"
        />
        <meta
          property="og:title"
          content="Contact Moshe Schwartzberg | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Ready to craft your dream app? Contact Moshe Schwartzberg for expert full-stack development."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Moshe Schwartzberg | Full-Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Ready to craft your dream app? Contact Moshe Schwartzberg for expert full-stack development."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact Moshe Schwartzberg",
            description:
              "Contact Moshe Schwartzberg for custom web and app development services in Israel.",
            publisher: {
              "@type": "Person",
              name: "Moshe Schwartzberg",
              email: "mosheschwartzberg@gmail.com",
              telephone: "+972587076077",
            },
            url: "https://mosheschwartzberg.com/contact",
          })}
        </script>
      </Helmet>
      <Menu />
      <h3 className="contactH3">{t("Let us know how we can help")}</h3>
      <h1 className="contacth1">{t("Contact Us")}</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}
