import "./OurProccess.css";
import PicXtext from "../picXtext/picXtext";
import imgXTextImg1 from "../../img/stepOneImg.png";
import imgXTextImg2 from "../../img/stepTwoImg.png";
import imgXTextImg3 from "../../img/stepThreeImg.png";
import OurProTitle from "./OurProTitle";
import { useTranslation } from "react-i18next";

export default function OurProccess() {
  const { t } = useTranslation();

  return (
    <div className="ourProSection">
      <div className="ourProSection-Title">
        <OurProTitle />
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg1}
        picXtexth1={t("Design")}
        textP={t(
          "Great design starts with you. transform your vision into captivating digital experiences. We craft stunning layouts that not only look great but also connect with your audience."
        )}
        WbtnQ={false}
        LORImg={false}
      />
      <div className="middleBoxProc">
        {t("Let people see the")} <span>{t("real")}</span>
        {t("you.")}
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg2}
        picXtexth1={t("Development")}
        textP={t(
          "Your dream website is within reach. Our skilled developers will expertly transform your ideas into a tangible, impressive online presence."
        )}
        WbtnQ={false}
        LORImg={true}
      />
      <div className="bottomBoxOuterBox">
        <div className="bottomBoxProc">
          <p className="procFir">{t("const")} </p>
          <p className="procsec"> {t("perfection")}</p>
          <p className="procLast"> {t("= planning + Meticulousness;")}</p>
        </div>
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg3}
        picXtexth1={t("Deployment & SEO")}
        textP={t(
          "Launch your site with confidence. Our team ensures smooth deployment and optimizes your online presence. We implement cutting-edge SEO strategies to boost your visibility, driving traffic and engagement. Watch your digital footprint grow as we fine-tune your site for search engines and users alike."
        )}
        WbtnQ={false}
        LORImg={false}
      />
    </div>
  );
}
