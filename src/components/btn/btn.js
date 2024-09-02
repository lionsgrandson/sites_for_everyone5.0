import React from "react";
import "./btn.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Btn({ btnHref, bntTxt, WoBcls, wAoN }) {
  return (
    <button className={`btn-btn ${WoBcls ? "white" : ""}`}>
      <a
        href={btnHref}
        className="aCls"
      >
        {bntTxt}
        {wAoN && <FaArrowRightLong style={{ marginLeft: "10px" }} />}
      </a>
    </button>
  );
}
