import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import ImgCard from "../components/portfolioImgCard/imgCard";
import Omnifood from "../img/portfolio/Omnifood-neverCookgain.png";
import DY from "../img/portfolio/DanielYehuda.jpg";
import EP from "../img/portfolio/EnterPlus.png";
import Itai from "../img/portfolio/ItaiArenFeld.png";
import LFZ from "../img/portfolio/LionsforZion.jpg";
import Mahogony from "../img/portfolio/MahogonyIsrael.png";
import Smokin from "../img/portfolio/SmokinT's.jpg";
import Shalom from "../img/portfolio/ShalomCarmel.jpg";
import ToraDojo from "../img/portfolio/ToraDojoIsrael.jpg";
import idfTene1 from "../img/portfolio/idftene.png";
import idftene2 from "../img/portfolio/idftene2.0.png";
import Maim from "../img/portfolio/maim-chaim.jpg";
import ShlomoPAtenet from "../img/patentNY/patentNYpic1.png";
import Nezila from "../img/nezila/welcome_client_page.png";

import "./portoflio.css";
import CTA from "../components/cta/cta";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  const imgArr = [
    Omnifood,
    DY,
    Smokin,
    Itai,
    ShlomoPAtenet,
    LFZ,
    Maim,
    idftene2,
    Mahogony,
    idfTene1,
    EP,
    Shalom,
    ToraDojo,
    Nezila,
  ];
  // TODO show only 4 and add a show more that'll load the rest
  // add Shlomo
  const textArr = [
    t("Omnifood"),
    t("Daniel Yehuda"),
    t("Smokin t's"),
    t("AI pro"),
    t("Shlomo Horowitz"),
    t("Lions for Zion"),
    t("Maim Chaim"),
    t("IDF Tech & Maintenance corps v2.0"),
    t("Mahogony Israel"),
    t("IDF Tech & Maintenance corps v1.0"),
    t("Enter Plus"),
    t("Shalom Carmel"),
    t("Tora Dojo Israel"),
    t("Nezila"),
  ];
  const linkArr = [
    "/omnifood",
    "/dy",
    "/smokin",
    "/aiPro",
    "/patNY",
    "/lfz",
    "/maim",
    "/tene2",
    "/mahogony",
    "/tene1",
    "/ep",
    "/shalom",
    "/toradojo",
    "/niz",
  ];
  return (
    <div>
      <Menu />
      <h3 className="protH3">{t("Not convinced yet?")}</h3>
      <h1 className="protH1">{t("See Our Work")}</h1>
      <div className="imgArrdiv">
        {imgArr.map((srcImg, index) => {
          return (
            <>
              <ImgCard
                linkHref={linkArr[index]}
                imgSrc={srcImg}
                imgTitle={textArr[index]}
              />
            </>
          );
        })}
      </div>
      <blockquote className="portQuote">
        {t("“It's not who we are underneath, but what we do that defines us.”")}
      </blockquote>
      <CTA
        ctaH1={t("Ready to Start Your Jorney?")}
        ctaBtn={t("Contact Us")}
        wAoN={true}
        btnOnBtn={true}
        ctaP={t(
          "Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. Contact us today for a free consultation and let's bring your vision to life"
        )}
      />
      <Footer />
    </div>
  );
}
