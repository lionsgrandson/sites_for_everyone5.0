import "./hero.css";
import { IoIosEasel } from "react-icons/io";
import { MdSupportAgent, MdDevicesOther } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { RxAccessibility } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import Btn from "../btn/btn";
export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="heroSectionHome">
      <h1 className="siteTitleHero">
        Sites for <span className="highlight bigTextEv">Everyone</span>
      </h1>
      <p className="bitTextHero">{t("Code Crafted, Dreams Delivered")}</p>
      <div className="toBeshown">
        <Btn
          btnHref="/contact"
          bntTxt={t("Craft Your Code Now")}
          WoBcls={false}
          wAoN={false}
        />
      </div>
      <div className="feat-hero">
        <div className="toBeHidden">
          <IoIosEasel
            color="var(--light-blue)"
            size="5rem"
            aria-label="Custom App Design Icon"
          />
          <p className="feat-home-text">{t("Custom App Design")}</p>
        </div>
        <div>
          <MdDevicesOther
            color="var(--light-blue)"
            size="5rem"
            aria-label="Responsive Code Solutions Icon"
          />
          <p className="feat-home-text">{t("Responsive Code")}</p>
        </div>
        <div>
          <FaEarthAfrica
            color="var(--light-blue)"
            size="5rem"
            aria-label="SEO-Driven Deployment Icon"
          />
          <p className="feat-home-text">{t("SEO-Driven")}</p>
        </div>
        <div>
          <RxAccessibility
            color="var(--light-blue)"
            size="5rem"
            aria-label="Accessible Development Icon"
          />
          <p className="feat-home-text">{t("Accessible Development")}</p>
        </div>
        <div className="toBeHidden">
          <MdSupportAgent
            color="var(--light-blue)"
            size="5rem"
            aria-label="Tailored CRM Creation Icon"
          />
          <p className="feat-home-text">{t("Tailored CRM")}</p>
        </div>
      </div>
    </div>
  );
}
