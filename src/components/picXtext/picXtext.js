import "./picXtext.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PicXtext(props) {
  const classNamePr = `home-picXtext-div ${props.LORImg ? "left" : ""}`;
  const aboutClsName = `${props.aboutCls ? "about" : ""}`;
  return (
    // TODO deal with the elips
    <div className={`${classNamePr} ${props.aboutCls ? "about" : ""}`}>
      <div className="home-picXtext-innder-div">
        <h1 className={`home-picXtext-h1 ${props.aboutCls ? "about" : ""}`}>
          {props.picXtexth1}
        </h1>
        <p className={`home-picXtext-p ${props.aboutCls ? "about" : ""}`}>
          {props.textP}
        </p>
        {props.WbtnQ ? (
          <button className="home-picXtext-btn">
            Read More <FaArrowRightLong />
          </button>
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
