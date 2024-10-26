import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "../../pages/contact.css";
import "../btn/btn.css";
import React, { useState, useRef } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [messageWorked, setMessageWorked] = useState(false);
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    console.log("Sending email with:", {
      serviceId: process.env.REACT_APP_SERVICE_ID,
      templateId: process.env.REACT_APP_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
      form: form.current,
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStateMessage(t("Message sent!"));
          setIsSubmitting(false);

          setTimeout(() => {
            setStateMessage(null);
            setMessageWorked(true);
          }, 1000); // hide message after 1 second
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStateMessage(t("Something went wrong, please try again later!"));
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    form.current.reset();
  };
  return (
    <div className="divContact">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >
        <div className="firstRow">
          <div className="namediv">
            <label htmlFor="name">
              {t("Name")}
              <span> *</span>
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
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
              name="user_email"
              className="form-input emailIn"
              required
            />
          </div>
        </div>
        <div className="messageDiv">
          <label htmlFor="message">
            {t("Message")}
            <span> *</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea messgaeIn"
            required
          />
        </div>
        <button
          type="submit"
          // disabled={isSubmitting}
          className="btn-btn "
        >
          {t(isSubmitting ? "Sending..." : "Send")}
        </button>
        {stateMessage && <p className="form-message">{stateMessage}</p>}
      </form>
      {messageWorked && (
        <Navigate
          to="../thankyou"
          replace={true}
        />
      )}
    </div>
  );
}
