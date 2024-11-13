import { useTranslation } from "react-i18next";

export default function QnALis() {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li>{t("What is the price of a website?")}</li>
        <li>{t("How long does the process take before the site is live?")}</li>
        <li>
          {t(
            "Will there be support and maintenance available even after the project is over?"
          )}
        </li>
      </ul>
    </div>
  );
}
