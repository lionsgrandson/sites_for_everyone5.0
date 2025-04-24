import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/toraDojo/toradojoLogo.jpg";
import screen1 from "../../img/portfolio/ToraDojoIsrael.jpg";
import screen2 from "../../img/toraDojo/screen2.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function ToraDojo() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Tora Dojo Israel")}
        client={t("Tora Dojo Israel")}
        year="2017"
        services={t("Web Development, Maintinance")}
        linkHref="https://toradojo.co.il"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "This is the largest Tora Dojo branch outside the United States, founded by sixth-degree black belt Arthur Gribetz, along with a dedicated team of high-ranking expert instructors."
        )}
      />
    </div>
  );
}
