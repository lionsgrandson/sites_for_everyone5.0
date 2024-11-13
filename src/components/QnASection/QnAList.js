import { useTranslation } from "react-i18next";
import "./QnA.css";
import { useState } from "react";
export default function QnALis() {
  const { t } = useTranslation();

  return (
    <div>
      <ul className="ulQnA">
        <li className="liQnA">
          <a
            href="#"
            className="aQnA"
          >
            {t("What is the price of a website?")}{" "}
          </a>
        </li>
        <li className="liQnA">
          <a
            href="#"
            className="aQnA"
          >
            {t("How long does the process take before the site is live?")}
          </a>
        </li>
        <li className="liQnA">
          <a
            href="#"
            className="aQnA"
          >
            {t(
              "Will there be support and maintenance available even after the project is over?"
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}
