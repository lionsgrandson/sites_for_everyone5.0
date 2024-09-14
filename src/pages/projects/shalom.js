import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/shalom/logoShalom.png";
import screen1 from "../../img/portfolio/ShalomCarmel.jpg";
import screen2 from "../../img/shalom/screen2.png";
import { useTranslation } from "react-i18next";

export default function ShalomCarmel() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Shalom Carmel")}
        client={t("Shalom Carmel")}
        year="2018"
        services={t("Maintinance")}
        linkHref="https://shalom1.ussl.co/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "‘Shalom Carmel’ was established to showcase the rich ethnic and cultural diversity of Haifa and Mount Carmel. Their tours provide groups with the opportunity to engage with various communities in the area and learn how they collaborate to foster a more unified society."
        )}
      />
    </div>
  );
}
