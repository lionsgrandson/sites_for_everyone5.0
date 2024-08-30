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
import "./projects.css"
export default function Projects(props) {
  const imgArr = [
      omniFood,
      ID1Img,
      DYImg,
      itaiImg,
    toraDojo,
    smokin,
    shlomo,
    maimChaim,
    Mahogony,
    lfzImg,
    ID2Img,
    EPImg,
  ];

  return (
    <div>
      <h2 className="Projh2">{props.h2Proj}</h2>
      <h1 className="projh1">{props.h1Proj} </h1>
      <div className="img-arr-div">

      {imgArr.map((arr, index) => {
          if (index <= parseInt(props.exitNum)-1) {
              return <img className="imgProj" src={arr} />;
            }
        })}
        </div>
    </div>
  );
}
// TODO edit this so this component is a title card, and you can use it in other places, not as a grid, but as a card with text 
