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
import "./portoflio.css";
export default function Portfolio() {
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
    "Omnifood",
    "Daniel Yehuda",
    "Smokin t's",
    "AI pro",
    "Lions for Zion",
    "Maim Chaim",
    "IDF Tech & Maintenance corps v2.0",
    "Mahogony Israel",
    "IDF Tech & Maintenance corps v1.0",
    "Enter Plus",
    "Shalom Carmel",
    "Tora Dojo Israel",
  ];
  return (
    <div>
      <Menu />
      <h3 className="protH3">Not convinced yet?</h3>
      <h1 className="protH1">See Our Work</h1>
      <div className="imgArrdiv">
        {imgArr.map((srcImg, index) => {
          return (
            <ImgCard
              imgSrc={srcImg}
              imgTitle={textArr[index]}
            />
          );
        })}
      </div>
      <blockquote className="portQuote">
        “It's not who we are underneath, but what we do that defines us.”
      </blockquote>
      <Footer />
    </div>
  );
}
