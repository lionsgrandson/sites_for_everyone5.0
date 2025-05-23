import Projects from "../projects/projects";
import { useTranslation } from "react-i18next";
import ImgCard from "../portfolioImgCard/imgCard";
import Omnifood from "../../img/portfolio/Omnifood-neverCookgain.png";
import DY from "../../img/portfolio/DanielYehuda.jpg";
import EP from "../../img/portfolio/EnterPlus.png";
import Itai from "../../img/portfolio/ItaiArenFeld.png";
import LFZ from "../../img/portfolio/LionsforZion.jpg";
import Mahogony from "../../img/portfolio/MahogonyIsrael.png";
import Smokin from "../../img/portfolio/SmokinT's.jpg";
import Shalom from "../../img/portfolio/ShalomCarmel.jpg";
import ToraDojo from "../../img/portfolio/ToraDojoIsrael.jpg";
import idfTene1 from "../../img/portfolio/idftene.png";
import idftene2 from "../../img/portfolio/idftene2.0.png";
import Maim from "../../img/portfolio/maim-chaim.jpg";
import Nezila from "../../img/portfolio/welcome_client_page.png";
import "./moreProj.css";
export default function MoreProj() {
  const { t } = useTranslation();
  const imgArr = [
    Omnifood,
    DY,
    Smokin,
    Itai,
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
  const textArr = [
    t("Omnifood"),
    t("Daniel Yehuda"),
    t("Smokin t's"),
    t("AI pro"),
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
  const fewArr = [
    t(
      "Omnifood: AI-driven personalized meal subscription service delivering healthy, chef-prepared meals."
    ),
    t(
      "Daniel Yehuda: Jewish musician connecting young souls through uplifting music, offering performances and events worldwide."
    ),
    t(
      "Smokin T's: Barbecue restaurant known for house-made pastrami and corned beef sandwiches."
    ),
    t(
      "AI Pro: Comprehensive calibration and engineering services using a 'Turn Key' method."
    ),
    t(
      "Lions for Zion: Non-profit supporting Israel and combating antisemitism through education and advocacy."
    ),
    t(
      "Maim Chaim: Torah-based school in Jerusalem providing holistic education for boys and girls."
    ),
    t(
      "IDF Tech & Maintenance Corps: IDF unit focused on technological and operational innovation."
    ),
    t(
      "Mahagony Israel: Luxury furniture company specializing in high-end wooden and custom-made pieces."
    ),
    t(
      "IDF Tech & Maintenance Corps: IDF unit focused on technological and operational innovation."
    ),
    t(
      "Enter Plus: Creator of a life-saving bracelet that detects drowning and alerts emergency services."
    ),
    t(
      "Shalom Carmel: Organization showcasing Haifa's ethnic and cultural diversity through tours."
    ),
    t(
      "Tora Dojo Israel: Largest Tora Dojo branch outside the US, founded by Arthur Gribetz."
    ),
    t("Nezila: A started-up that connects blue colored workers to customers"),
  ];

  let rndImg = Math.floor(Math.random() * imgArr.length);
  return (
    <div className="headerDiv">
      <h1 className="headerH1">{t("See More Projects")}</h1>
      <div className="containerMoreProj">
        {imgArr.map((srcImg, index) => {
          if (index < 2) {
            if (index == 1 && rndImg < imgArr.length - 1) {
              rndImg++;
              return (
                <ImgCard
                  linkHref={linkArr[rndImg]}
                  imgSrc={imgArr[rndImg]}
                  imgTitle={textArr[rndImg]}
                  fewWords={fewArr[rndImg]}
                />
              );
            } else if (index == 1) {
              rndImg--;
              return (
                <ImgCard
                  linkHref={linkArr[rndImg]}
                  imgSrc={imgArr[rndImg]}
                  imgTitle={textArr[rndImg]}
                  fewWords={fewArr[rndImg]}
                />
              );
            } else {
              return (
                <ImgCard
                  linkHref={linkArr[rndImg]}
                  imgSrc={imgArr[rndImg]}
                  imgTitle={textArr[rndImg]}
                  fewWords={fewArr[rndImg]}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
}
