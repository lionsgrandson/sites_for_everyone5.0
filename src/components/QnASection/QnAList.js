import { useTranslation } from "react-i18next";
import "./QnA.css";
import { useState } from "react";
export default function QnALis() {
  const { t } = useTranslation();
  const [openAnswer1, setOpenAnswer1] = useState(false);
  const [openAnswer2, setOpenAnswer2] = useState(false);
  const [openAnswer3, setOpenAnswer3] = useState(false);
  const OnClickButton1 = () => {
    setOpenAnswer1(!openAnswer1);
  };
  const OnClickButton2 = () => {
    setOpenAnswer2(!openAnswer2);
  };
  const OnClickButton3 = () => {
    setOpenAnswer3(!openAnswer3);
  };
  return (
    <div>
      <ul className="ulQnA">
        <li className="liQnA">
          <button
            onClick={OnClickButton1}
            className="aQnA"
          >
            {t("What is the price of a website?")}
          </button>
        </li>
        {openAnswer1 && <li className="QnAAnswer">Text Text Text</li>}
        <li className="liQnA">
          <button
            onClick={OnClickButton2}
            className="aQnA"
          >
            {t("How long does the process take before the site is live?")}
          </button>
        </li>
        {openAnswer2 && <li className="QnAAnswer">Text Text Text</li>}
        <li className="liQnA">
          <button
            onClick={OnClickButton3}
            className="aQnA"
          >
            {t(
              "Will there be support and maintenance available even after the project is over?"
            )}
          </button>
        </li>
        {openAnswer3 && (
          <li className="QnAAnswer">
            {t(
              "Even after the website is live, we stay with you and provide ongoing support to ensure that your site is maintained at the highest level, always looks up-to-date, and meets your long-term needs"
            )}
          </li>
        )}
      </ul>
    </div>
  );
}
