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
  ];
  const fewArr = [
    "Omnifood is a personalized meal subscription service that delivers healthy, chef-prepared meals to your door. Using AI, it creates tailored meal plans based on your dietary preferences, offering a variety of options to suit different diets. Enjoy the convenience of nutritious eating while supporting local and organic food sources.",
    "Daniel Yehuda is a Jewish musician who connects young Jewish souls through uplifting music. He offers customized performances, workshops, and events worldwide, focusing on Judaism and Zionism. Daniel also serves as a cantor and provides entertainment for celebrations like weddings and bar mitzvahs.",
    "Smokin T's is a barbecue and grill-style restaurant that offers a unique blend of delicious dishes, including house-made pastrami and corned beef sandwiches. With a focus on quality, their menu features mouthwatering appetizers, fresh desserts, and exemplary service in a relaxed atmosphere. The restaurant has evolved through various kitchens to perfect its recipes, ensuring a memorable dining experience.",
    "AI Pro delivers comprehensive calibration, engineering, and validation services that prioritize customer needs in a holistic manner. By providing optimal, budget-compliant solutions, they eliminate the burden of additional tasks for clients. Utilizing a `Turn Key` method, they ensure that products and services are ready for immediate use, streamlining the process for a seamless experience.",
    "Lions for Zion is a non-profit organization dedicated to supporting Israel and combating antisemitism. They focus on educating and empowering young adults to become advocates for Israel through leadership training, campus activism, and community engagement. The organization aims to strengthen the connection between Jewish youth and their heritage while promoting a positive image of Israel.",
    "Maim Chaim is a Torah-based school in Jerusalem that provides a holistic education for boys and girls. It combines religious studies with core subjects, fostering joyful learning and personal growth through diverse activities like music, art, and life skills.",
    "IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation. This unit develops and implements cutting-edge solutions to enhance military capabilities across various domains. TENE combines expertise in technology, engineering, and combat to create advanced systems and strategies, ensuring Israel's military readiness in the face of evolving threats.",
    "Mahagony Israel is a luxury furniture and interior design company specializing in high-end wooden furniture and custom-made pieces. They offer a range of exquisite mahogany products, including tables, chairs and cabinets. The company prides itself on craftsmanship, attention to detail, and using premium quality materials to create timeless and elegant furniture for discerning clients in Israel and beyond.",
    "IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation. This unit develops and implements cutting-edge solutions to enhance military capabilities across various domains. TENE combines expertise in technology, engineering, and combat to create advanced systems and strategies, ensuring Israel's military readiness in the face of evolving threats.",
    "Enter Plus has created a life-saving bracelet that detects drowning by monitoring vital signs. When a drowning incident occurs, it automatically alerts lifeguards, parents, and emergency services like 911. This innovative device enhances pool safety and provides peace of mind for families.",
    "'Shalom Carmel' was established to showcase the rich ethnic and cultural diversity of Haifa and Mount Carmel. Their tours provide groups with the opportunity to engage with various communities in the area and learn how they collaborate to foster a more unified society.",
    "This is the largest Tora Dojo branch outside the United States, founded by sixth-degree black belt Arthur Gribetz, along with a dedicated team of high-ranking expert instructors",
  ];
  return (
    <div className="headerDiv">
      <h1 className="headerH1">{t("See More Projects")}</h1>
      <div className="containerMoreProj">
        {imgArr.map((srcImg, index) => {
          if (index <= 1) {
            return (
              <ImgCard
                linkHref={linkArr[index]}
                imgSrc={srcImg}
                imgTitle={textArr[index]}
                fewWords={fewArr[index]}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
