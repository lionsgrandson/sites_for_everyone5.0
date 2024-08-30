// grid of imgs
// title top with logo
// text bottom
// title can go to the bottom with no logo
import DYImg from "../../img/portfolio/DanielYehuda.jpg";
import EPImg from "../../img/portfolio/EnterPlus.png";
import ID1Img from "../../img/portfolio/idftene.png";
import ID2Img from "../../img/portfolio/idftene2.0.png";
import itaiImg from "../../img/portfolio/ItaiArenFeld.png";
import lfzImg from "../../img/portfolio/LionsforZion.jpg";
import Mahogony from "../../img/portfolio/MahogonyIsrael.png";
import maimChaim from "../../img/portfolio/maim-chaim.jpg";
import omniFood from "../../img/portfolio/Omnifood-neverCookgain.png";
import shlomo from "../../img/portfolio/ShalomCarmel.jpg";
import smokin from "../../img/portfolio/SmokinT's.jpg";
import toraDojo from "../../img/portfolio/ToraDojoIsrael.jpg";
export default function Projects(props) {
  const imgArr = [
    toraDojo,
    smokin,
    shlomo,
    omniFood,
    maimChaim,
    Mahogony,
    lfzImg,
    itaiImg,
    ID2Img,
    ID1Img,
    EPImg,
    DYImg,
  ];

  return (
    <div>
      <h2>{props.h2Proj}</h2>
      <h1>{props.h1Proj} </h1>
      {imgArr.map((arr) => {
        return <img src={arr} />;
      })}
    </div>
  );
}
