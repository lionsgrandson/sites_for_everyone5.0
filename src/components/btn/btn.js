import "./btn.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Btn(props) {
  return (
    <>
      <button className="btn-btn"><a href={props.btnHref}>

        {props.bntTxt} <FaArrowRightLong />
      </a>
      </button>
      ;
    </>
  );
}
