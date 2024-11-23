import Btn from "../btn/btn";
import { useTranslation } from "react-i18next";
import QnALis from "./QnAList";
import "./QnA.css";

export default function QnA() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="divQnA">
        <div className="mainContentDiv">
          <h1 className="h1QnA">{t("Questions")}?</h1>
          <QnALis />
        </div>
        <Btn
          bntTxt={t("Get a quote")}
          btnHref="/contact"
        />
      </div>
    </div>
  );
}
