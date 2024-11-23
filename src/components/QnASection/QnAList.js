import { useTranslation } from "react-i18next";
import "./QnA.css";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

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
            <FaPlus />
            {t("What is the price of a website?")}
          </button>
          {openAnswer1 && (
            <li className="QnAAnswer">
              {t(
                "Every project requires a unique approach; we build each website from scratch, so you won’t find templates or identical sites for different clients here. Each site also demands entirely different work based on the project’s requirements. Want a price quote? Contact us using the button below, and we’ll get back to you with all the answers."
              )}
            </li>
          )}
        </li>
        <li className="liQnA">
          <button
            onClick={OnClickButton2}
            className="aQnA"
          >
            <FaPlus />
            {t("How long does the process take before the site is live?")}
          </button>
          {openAnswer2 && (
            <li className="QnAAnswer">
              {t(
                "We want to launch your website as soon as possible, without compromising on quality or attention to detail. Since each website has different requirements, the process can take anywhere from two weeks to six months. Want to know how long it will take for your website to go live? Leave your details, and we’ll get back to you with all the answers."
              )}
            </li>
          )}
        </li>
        <li className="liQnA">
          <button
            onClick={OnClickButton3}
            className="aQnA"
          >
            <FaPlus />
            {t(
              "Will there be support and maintenance available even after the project is over?"
            )}
          </button>
          {openAnswer3 && (
            <li className="QnAAnswer">
              {t(
                "Even after the website is live, we stay with you and provide ongoing support to ensure that your site is maintained at the highest level, always looks up-to-date, and meets your long-term needs"
              )}
            </li>
          )}
        </li>
      </ul>
    </div>
  );
}
