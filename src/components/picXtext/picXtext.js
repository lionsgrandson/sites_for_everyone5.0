import "./picXtext.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Btn from "../btn/btn";
import { useTranslation } from "react-i18next";

export default function PicXtext(props) {
  const classNamePr = `home-picXtext-div ${props.LORImg ? "left" : ""}`;
  const aboutClsName = `${props.aboutCls ? "about" : ""}`;
  const { t } = useTranslation();

  return (
    // TODO deal with the elips
    <div className={`${classNamePr} ${props.aboutCls ? "about" : ""}`}>
      <div
        className={`home-picXtext-innder-div ${props.aboutCls ? "about" : ""}`}
      >
        <h1 className={`home-picXtext-h1 ${props.aboutCls ? "about" : ""}`}>
          {props.picXtexth1}
        </h1>
        <p className={`home-picXtext-p ${props.aboutCls ? "about" : ""}`}>
          {props.textP}
        </p>
        {props.WbtnQ ? (
          <Btn
            bntTxt={t("Read More")}
            wAoN={true}
            btnHref="/about"
          />
        ) : null}
      </div>
      <img
        src={props.imgXTextImg}
        className="home-picXtext-img"
        alt="image of the CEO of the company - Moshe"
      />
    </div>
  );
}
