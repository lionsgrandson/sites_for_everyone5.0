import "./OurProccess.css";
import PicXtext from "../picXtext/picXtext";
import imgXTextImg1 from "../../img/stepOneImg.jpg";
import imgXTextImg2 from "../../img/stepTwoImg.jpg";
import imgXTextImg3 from "../../img/stepThreeImg.jpg";
import OurProTitle from "./OurProTitle";
import { useTranslation } from "react-i18next";
import Btn from "../btn/btn";
export default function OurProccess() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div className="ourProSection">
      <div className="ourProSection-Title">
        <OurProTitle />
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg1}
        imgAlt="A laptop on a table with the design app Figma open"
        picXtexth1={t("Design")}
        textP={t(
          "Great design starts with you. transform your vision into captivating digital experiences. We craft stunning layouts that not only look great but also connect with your audience."
        )}
        WbtnQ={false}
        LORImg={false}
      />
      <div className="btn-contact-proc"></div>
      <div style={{ position: "relative" }}>
        <div className="middleBoxProc">
          {t("Let people see the")} <span>{t("real")}</span>
          {t(" you.")}
        </div>
      </div>
      <PicXtext
        imgXTextImg={imgXTextImg2}
        imgAlt="A screenshot of a computer with a lot of code wirrten"
        picXtexth1={t("Development")}
        textP={t(
          "Your dream website is within reach. Our skilled developers will expertly transform your ideas into a tangible, impressive online presence."
        )}
        WbtnQ={false}
        LORImg={true}
      />
      <div className="btn-contact-proc">
        <Btn bntTxt={t("Get a quote")} btnHref="/contact" />
      </div>
      {/* second arrow */}
      <div style={{ position: "relative" }}>
        <div className="bottomBoxOuterBox">
          <div
            className={`bottomBoxProc ${i18n.language === "he" && "heStyle"}`}
          >
            <p className="procFir">{t("const")}</p>
            <p className="procsec">{t("perfection")}</p>
            <p className="procLast">{t("= planning + Meticulousness;")}</p>
          </div>
        </div>
      </div>
      <div className="forceLeft">
        <PicXtext
          imgXTextImg={imgXTextImg3}
          imgAlt="A picture taken from the side of a screen of google analytics"
          picXtexth1={t("Deployment & SEO")}
          textP={t(
            "Launch your site with confidence. Our team ensures smooth deployment and optimizes your online presence. We implement cutting-edge SEO strategies to boost your visibility, driving traffic and engagement. Watch your digital footprint grow as we fine-tune your site for search engines and users alike."
          )}
          WbtnQ={false}
          LORImg={false}
        />
      </div>
      <div className="btn-contact-proc"></div>
    </div>
  );
}
