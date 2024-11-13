import Btn from "../btn/btn";
import { useTranslation } from "react-i18next";
import QnALis from "./QnAList";

export default function QnA() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("Questions")}?</h1>
      <QnALis />
      <Btn
        bntTxt={t("Get a quote")}
        btnHref="/contact"
      />
    </div>
  );
}
