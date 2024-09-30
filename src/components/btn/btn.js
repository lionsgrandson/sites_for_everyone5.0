import React from "react";
import "./btn.css";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
export default function Btn({ btnHref, bntTxt, WoBcls, wAoN }) {
  const { t } = useTranslation();
  return (
    <button className={`btn-btn ${WoBcls ? "white" : ""}`}>
      <a
        href={btnHref}
        className="aCls"
      >
        {bntTxt}
        {i18n.language == "en"
          ? wAoN && <FaArrowRightLong style={{ marginLeft: "10px" }} />
          : wAoN && <FaArrowLeftLong style={{ marginRight: "10px" }} />}
      </a>
    </button>
  );
}
