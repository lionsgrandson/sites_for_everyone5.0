import "./OurProccess.css";
import PicXtext from "../picXtext/picXtext";
import imgXTextImg1 from "../../img/stepOneImg.png";
import imgXTextImg2 from "../../img/stepTwoImg.png";
import imgXTextImg3 from "../../img/stepThreeImg.png";
import OurProTitle from "./OurProTitle";
export default function OurProccess() {
  return (
    <div className="ourProSection">
      <div className="ourProSection-Title">
        <OurProTitle />
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg1}
        picXtexth1="Design"
        textP="Great design starts with you. transform your vision into captivating digital experiences. We craft stunning layouts that not only look great but also connect with your audience."
        WbtnQ={false}
        LORImg={false}
      />
      <PicXtext
        imgXTextImg={imgXTextImg2}
        picXtexth1="Development"
        textP="Your dream website is within reach. Our skilled developers will expertly transform your ideas into a tangible, impressive online presence."
        WbtnQ={false}
        LORImg={true}
      />
      <PicXtext
        imgXTextImg={imgXTextImg3}
        picXtexth1="Deployment & SEO"
        textP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu nibh ut sapien bibendum pretium vitae eu arcu."
        WbtnQ={false}
        LORImg={false}
      />
    </div>
  );
}
