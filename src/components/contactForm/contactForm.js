import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../pages/contact.css";
import "../btn/btn.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [messageWorked, setMessageWorked] = useState(false);
  const { t } = useTranslation();
  const form = useRef();

  const API_URL =
    process.env.NODE_ENV === "production"
      ? `${window.location.origin}/send-email.php`
      : "http://localhost/send-email.php";
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);
    const formDataObject = Object.fromEntries(formData.entries());

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("SUCCESS!", data.message);
          setStateMessage(t("Message sent!"));
          setIsSubmitting(false);

          setTimeout(() => {
            setStateMessage(null);
            setMessageWorked(true);
          }, 1000);

          form.current.reset();
        } else {
          throw new Error(data.message || "Unknown error");
        }
      })
      .catch((error) => {
        console.error("FAILED...", error.message);
        setStateMessage(t("Something went wrong, please try again later!"));
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000);
      });
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
            <label htmlFor="phone">
              {t("Phone")}
              <span> *</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="user_phone"
              className="form-input emailIn"
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
          className="btn-btn"
        >
          {t(isSubmitting ? "Sending..." : "Send")}
        </button>
        {stateMessage && <p className="form-message">{stateMessage}</p>}
        <label>
          <a
            href="mailto:mosheschwartzberg@gmail.com"
            className="backupMail"
          >
            {t("Email: mosheschwartzberg@gmail.com")}
          </a>
        </label>
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
