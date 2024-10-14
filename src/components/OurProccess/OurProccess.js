import "./OurProccess.css";
import PicXtext from "../picXtext/picXtext";
import imgXTextImg1 from "../../img/stepOneImg.jpg";
import imgXTextImg2 from "../../img/stepTwoImg.jpg";
import imgXTextImg3 from "../../img/stepThreeImg.jpg";
import OurProTitle from "./OurProTitle";
import { useTranslation } from "react-i18next";

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
      <div style={{ position: "relative" }}>
        {i18n.language === "en" && (
          <svg
            width="1145"
            height="550"
            viewBox="0 0 1245 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "0 25%" }}
          >
            <path
              d="M1243.5 386.5L1244.5 386.567L1244.5 386.538L1244.5 386.508L1243.5 386.5ZM871.5 543.5L871.491 544.5L871.511 544.5L871.53 544.5L871.5 543.5ZM506.293 649.207C506.684 649.598 507.317 649.597 507.707 649.207L514.071 642.843C514.462 642.452 514.462 641.819 514.071 641.429C513.681 641.038 513.048 641.038 512.657 641.429L507 647.086L501.343 641.429C500.953 641.038 500.32 641.038 499.929 641.429C499.539 641.819 499.539 642.452 499.929 642.843L506.293 649.207ZM714 174.5L714 173.5L714 174.5ZM1242.5 386.433C1240.48 416.381 1231.99 440.568 1216.54 460.151C1201.09 479.742 1178.6 494.804 1148.45 506.385C1088.1 529.566 997.294 538.712 871.47 542.5L871.53 544.5C997.328 540.712 1088.46 531.571 1149.17 508.252C1179.55 496.584 1202.37 481.343 1218.11 461.39C1233.86 441.429 1242.45 416.832 1244.5 386.567L1242.5 386.433ZM871.509 542.5C795.882 541.819 735.264 541.478 686.887 542.992C638.522 544.505 602.323 547.873 575.558 554.634C548.782 561.397 531.321 571.588 520.593 586.838C509.878 602.069 506 622.178 506 648.5L508 648.5C508 622.322 511.869 602.715 522.228 587.989C532.574 573.283 549.515 563.275 576.048 556.573C602.592 549.868 638.609 546.503 686.95 544.991C735.279 543.479 795.855 543.819 871.491 544.5L871.509 542.5ZM0.000184358 -0.000118139C0.000152503 46.6894 12.4338 81.1431 39.2986 106.462C66.1193 131.739 107.194 147.785 164.199 157.984C278.187 178.38 456.568 175.5 714 175.5L714 173.5C456.432 173.5 278.313 176.37 164.551 156.016C107.681 145.84 67.0685 129.886 40.6704 105.007C14.3165 80.1692 2.00015 46.3104 2.00015 -8.65274e-05L0.000184358 -0.000118139ZM714 175.5C935.523 175.5 1068 189.669 1144.94 223.152C1183.37 239.874 1207.87 261.387 1222.71 288.31C1237.57 315.255 1242.81 347.73 1242.5 386.492L1244.5 386.508C1244.81 347.583 1239.55 314.715 1224.46 287.344C1209.36 259.951 1184.47 238.174 1145.74 221.318C1068.37 187.645 935.477 173.5 714 173.5L714 175.5Z"
              fill="#5C48AD"
            />
          </svg>
        )}
        {i18n.language === "he" && (
          <svg
            width="1145"
            height="550"
            viewBox="0 0 1245 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1243.5 386.5L1244.5 386.567L1244.5 386.538L1244.5 386.508L1243.5 386.5ZM871.5 543.5L871.491 544.5L871.511 544.5L871.53 544.5L871.5 543.5ZM506.293 649.207C506.684 649.598 507.317 649.597 507.707 649.207L514.071 642.843C514.462 642.452 514.462 641.819 514.071 641.429C513.681 641.038 513.048 641.038 512.657 641.429L507 647.086L501.343 641.429C500.953 641.038 500.32 641.038 499.929 641.429C499.539 641.819 499.539 642.452 499.929 642.843L506.293 649.207ZM714 174.5L714 173.5L714 174.5ZM1242.5 386.433C1240.48 416.381 1231.99 440.568 1216.54 460.151C1201.09 479.742 1178.6 494.804 1148.45 506.385C1088.1 529.566 997.294 538.712 871.47 542.5L871.53 544.5C997.328 540.712 1088.46 531.571 1149.17 508.252C1179.55 496.584 1202.37 481.343 1218.11 461.39C1233.86 441.429 1242.45 416.832 1244.5 386.567L1242.5 386.433ZM871.509 542.5C795.882 541.819 735.264 541.478 686.887 542.992C638.522 544.505 602.323 547.873 575.558 554.634C548.782 561.397 531.321 571.588 520.593 586.838C509.878 602.069 506 622.178 506 648.5L508 648.5C508 622.322 511.869 602.715 522.228 587.989C532.574 573.283 549.515 563.275 576.048 556.573C602.592 549.868 638.609 546.503 686.95 544.991C735.279 543.479 795.855 543.819 871.491 544.5L871.509 542.5ZM0.000184358 -0.000118139C0.000152503 46.6894 12.4338 81.1431 39.2986 106.462C66.1193 131.739 107.194 147.785 164.199 157.984C278.187 178.38 456.568 175.5 714 175.5L714 173.5C456.432 173.5 278.313 176.37 164.551 156.016C107.681 145.84 67.0685 129.886 40.6704 105.007C14.3165 80.1692 2.00015 46.3104 2.00015 -8.65274e-05L0.000184358 -0.000118139ZM714 175.5C935.523 175.5 1068 189.669 1144.94 223.152C1183.37 239.874 1207.87 261.387 1222.71 288.31C1237.57 315.255 1242.81 347.73 1242.5 386.492L1244.5 386.508C1244.81 347.583 1239.55 314.715 1224.46 287.344C1209.36 259.951 1184.47 238.174 1145.74 221.318C1068.37 187.645 935.477 173.5 714 173.5L714 175.5Z"
              fill="#5C48AD"
            />
          </svg>
        )}
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
      {i18n.language === "en" && (
        <div className="bottomBoxOuterBox">
          <div className="bottomBoxProc">
            <p className="procFir">{t("const")}</p>
            <p className="procsec">{t("perfection")}</p>
            <p className="procLast">{t("= planning + Meticulousness;")}</p>
          </div>
        </div>
      )}

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
    </div>
  );
}
