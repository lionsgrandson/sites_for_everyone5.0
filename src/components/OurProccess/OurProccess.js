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
        {i18n.language === "he" && (
          <svg
            width="70%"
            height="100%"
            viewBox="0 0 1082 540"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "25vw" }}
          >
            <path
              d="M346.501 121.5L346.501 122.5L346.501 121.5ZM1.5005 298L0.500521 298.004L0.500644 298.036L0.502842 298.068L1.5005 298ZM391.501 440.5L391.501 441.5L391.501 440.5ZM1073.79 539.208C1074.18 539.598 1074.82 539.598 1075.21 539.208L1081.57 532.844C1081.96 532.453 1081.96 531.82 1081.57 531.429C1081.18 531.039 1080.55 531.039 1080.16 531.429L1074.5 537.086L1068.84 531.429C1068.45 531.039 1067.82 531.039 1067.43 531.429C1067.04 531.82 1067.04 532.453 1067.43 532.844L1073.79 539.208ZM729 0.500587C729 22.8226 723.425 41.3902 710.585 56.7335C697.728 72.0977 677.501 84.33 648.007 93.7979C588.988 112.744 493.26 120.5 346.501 120.5L346.501 122.5C493.241 122.5 589.263 114.756 648.619 95.7022C678.312 86.1702 698.93 73.7776 712.119 58.017C725.326 42.2354 731 23.1783 731 0.500587L729 0.500587ZM346.501 120.5C224.004 120.5 137.415 130.231 81.4993 157.274C53.5078 170.812 33.1681 188.703 19.8713 211.902C6.58003 235.091 0.37289 263.501 0.500521 298.004L2.50049 297.996C2.37372 263.731 8.53927 235.695 21.6065 212.896C34.6683 190.108 54.673 172.47 82.37 159.074C137.831 132.251 223.997 122.5 346.501 122.5L346.501 120.5ZM0.502842 298.068C3.18283 337.168 36.144 373.021 100.606 399.066C165.111 425.129 261.434 441.5 391.501 441.5L391.501 439.5C261.567 439.5 165.53 423.141 101.355 397.212C37.1375 371.266 5.09862 335.869 2.49817 297.932L0.502842 298.068ZM391.501 441.5C716.516 441.5 887.173 450.628 976.566 467.421C1021.28 475.821 1045.48 486.11 1058.51 497.982C1071.45 509.768 1073.5 523.226 1073.5 538.501L1075.5 538.501C1075.5 523.025 1073.42 508.858 1059.86 496.503C1046.39 484.234 1021.72 473.867 976.935 465.455C887.328 448.622 716.485 439.5 391.501 439.5L391.501 441.5Z"
              fill="#5C48AD"
            />
          </svg>
        )}
        {i18n.language === "en" && (
          <svg
            width="70%"
            height="100%"
            viewBox="0 0 1082 540"
            preserveAspectRatio="xMinYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: "10vw" }}
          >
            <path
              d="M346.501 121.5L346.501 122.5L346.501 121.5ZM1.5005 298L0.500521 298.004L0.500644 298.036L0.502842 298.068L1.5005 298ZM391.501 440.5L391.501 441.5L391.501 440.5ZM1073.79 539.208C1074.18 539.598 1074.82 539.598 1075.21 539.208L1081.57 532.844C1081.96 532.453 1081.96 531.82 1081.57 531.429C1081.18 531.039 1080.55 531.039 1080.16 531.429L1074.5 537.086L1068.84 531.429C1068.45 531.039 1067.82 531.039 1067.43 531.429C1067.04 531.82 1067.04 532.453 1067.43 532.844L1073.79 539.208ZM729 0.500587C729 22.8226 723.425 41.3902 710.585 56.7335C697.728 72.0977 677.501 84.33 648.007 93.7979C588.988 112.744 493.26 120.5 346.501 120.5L346.501 122.5C493.241 122.5 589.263 114.756 648.619 95.7022C678.312 86.1702 698.93 73.7776 712.119 58.017C725.326 42.2354 731 23.1783 731 0.500587L729 0.500587ZM346.501 120.5C224.004 120.5 137.415 130.231 81.4993 157.274C53.5078 170.812 33.1681 188.703 19.8713 211.902C6.58003 235.091 0.37289 263.501 0.500521 298.004L2.50049 297.996C2.37372 263.731 8.53927 235.695 21.6065 212.896C34.6683 190.108 54.673 172.47 82.37 159.074C137.831 132.251 223.997 122.5 346.501 122.5L346.501 120.5ZM0.502842 298.068C3.18283 337.168 36.144 373.021 100.606 399.066C165.111 425.129 261.434 441.5 391.501 441.5L391.501 439.5C261.567 439.5 165.53 423.141 101.355 397.212C37.1375 371.266 5.09862 335.869 2.49817 297.932L0.502842 298.068ZM391.501 441.5C716.516 441.5 887.173 450.628 976.566 467.421C1021.28 475.821 1045.48 486.11 1058.51 497.982C1071.45 509.768 1073.5 523.226 1073.5 538.501L1075.5 538.501C1075.5 523.025 1073.42 508.858 1059.86 496.503C1046.39 484.234 1021.72 473.867 976.935 465.455C887.328 448.622 716.485 439.5 391.501 439.5L391.501 441.5Z"
              fill="#5C48AD"
            />
          </svg>
        )}

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
