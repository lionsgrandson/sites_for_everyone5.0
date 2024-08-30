import "./picXtext.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function PicXtext(props) {
  const classNamePr = `home-picXtext-div ${props.LORImg ? "left" : ""}`;
  const aboutClsName = `${props.aboutCls ? "about" : ""}`;
  return (
    // fix the style
    // add switching img left or right
    // button optional
    // TODO deal with the elips
    //TODO fix the text width and hight
    <div className={`${classNamePr} ${props.aboutCls ? "about" : ""}`}>
      <div className="home-picXtext-innder-div">
        <h1 className={`home-picXtext-h1 ${props.aboutCls ? "about" : ""}`}>
          {props.picXtexth1}
        </h1>
        <p className="home-picXtext-p">{props.textP}</p>
        {props.WbtnQ ? (
          <button className="home-picXtext-btn">
            Read More <FaArrowRightLong />
          </button>
        ) : null}
      </div>
      <img
        src={props.imgXTextImg}
        className="home-picXtext-img"
        // '${props.LORImg}`
        alt="image of the CEO of the company - Moshe"
      />
    </div>
  );
}
