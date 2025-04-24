import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/tene/idfteneLogo.png";
import screen1 from "../../img/portfolio/idftene.png";
import screen2 from "../../img/tene/screen3.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function TENE1() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("IDF Tech & Maintenance corps v1.0")}
        client={t("IDF Tech & Maintenance corps v1.0")}
        year="2018"
        services={t("Web Development, Maintinance")}
        linkHref="https://web.archive.org/web/20221213173104/https://idftene.com"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation. This unit develops and implements cutting-edge solutions to enhance military capabilities across various domains. TENE combines expertise in technology, engineering, and combat to create advanced systems and strategies, ensuring Israel's military readiness in the face of evolving threats."
        )}
      />
    </div>
  );
}
