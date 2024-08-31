import "./btn.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Btn(props) {
  return (
    <>
      <button className={`btn-btn ${props.WoBcls ? "white" : ""}`}>
        <a
          href={props.btnHref}
          className={`aCls ${props.WoBcls ? "white" : ""}`}
        >
          {props.bntTxt} {props.wAoN && <FaArrowRightLong />}
        </a>
      </button>
    </>
  );
}
