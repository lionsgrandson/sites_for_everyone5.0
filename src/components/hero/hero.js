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
      <p className="bitTextHero">
        {t("Innovative solutions for your business needs.")}
      </p>
      <div className="toBeshown">
        <Btn
          btnHref="/contact"
          bntTxt={t("Get Started")}
          WoBcls={false}
          wAoN={false}
        />
      </div>
      <div className="feat-hero">
        <div className="toBeHidden">
          <IoIosEasel
            color="var(--light-blue)"
            size="5rem"
          />
          <p className="feat-home-text">{t("Professional Design")}</p>
        </div>
        <div>
          <MdDevicesOther
            color="var(--light-blue)"
            size="5rem"
          />
          <p className="feat-home-text">{t("Responsivity")}</p>
        </div>
        <div>
          <FaEarthAfrica
            color="var(--light-blue)"
            size="5rem"
          />

          <p className="feat-home-text">{t("Deployment + SEO")}</p>
        </div>

        <div>
          <RxAccessibility
            color="var(--light-blue)"
            size="5rem"
          />
          <p className="feat-home-text">{t("Accessibility")}</p>
        </div>
        <div className="toBeHidden">
          <MdSupportAgent
            color="var(--light-blue)"
            size="5rem"
          />
          <p className="feat-home-text">{t("Costumer Support")}</p>
        </div>
      </div>
    </div>
  );
}
