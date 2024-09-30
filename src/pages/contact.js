import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import "./contact.css";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import Btn from "../components/btn/btn";
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [messageWorked, setMessageWorked] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage(t("Message sent!"));
          setIsSubmitting(false);

          setTimeout(() => {
            setStateMessage(null);
            setMessageWorked(true);
          }, 1000); // hide message after 1 second
        },
        (error) => {
          setStateMessage(t("Something went wrong, please try again later"));
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="contactContainer">
      <Menu />
      <h3 className="contactH3">{t("Let us know how we can help")}</h3>
      <h1 className="contacth1">{t("Contact Us")}</h1>
      <form
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="namediv">
          <label htmlFor="name">
            {t("Name")}
            <span> *</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input nameIn"
            required
          />
        </div>
        <div className="emailDiv">
          <label htmlFor="email">
            {t("Email")}
            <span> *</span>
          </label>
          <input
            id="email"
            type="email"
            name="Your Email"
            className="form-input  emailIn"
            required
          />
        </div>
        <div className="messageDiv">
          <label htmlFor="message">
            {t("Message")}
            <span> *</span>
          </label>
          <textarea
            id="message"
            name="Your Message"
            className="form-textarea messgaeIn"
            required
          />
        </div>
        <Btn bntTxt={t("Submit")}>
          {t(isSubmitting ? "Sending..." : "Send")}
          {messageWorked ? (
            <Navigate
              to="../thankyou"
              replace={true}
            />
          ) : null}
        </Btn>
        {stateMessage && <p className="form-message">{t(stateMessage)}</p>}
      </form>
      <Footer />
    </div>
  );
}
