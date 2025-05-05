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
        <title>Contact CodeCrafter | Custom Code Solutions</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. Contact CodeCrafter for custom apps and CRMs today!"
        />
        <meta
          name="keywords"
          content="CodeCrafter contact, custom code developer Israel, app development, CRM solutions"
        />
        <meta
          property="og:title"
          content="Contact CodeCrafter | Custom Code Solutions"
        />
        <meta
          property="og:description"
          content="Ready for custom tech? Contact CodeCrafter to craft your app or CRM solution."
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
          content="Contact CodeCrafter | Custom Code Solutions"
        />
        <meta
          name="twitter:description"
          content="Ready for custom tech? Contact CodeCrafter to craft your app or CRM solution."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Contact CodeCrafter",
            description:
              "Crafting code, creating solutions. Contact CodeCrafter for custom web and app development services in Israel.",
            publisher: {
              "@type": "Organization",
              name: "CodeCrafter",
              contactPoint: {
                "@type": "ContactPoint",
                email: "mosheschwartzberg@gmail.com",
                telephone: "+972587076077",
              },
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
