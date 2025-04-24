// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/danielYehuda/dyLogo.png";
import OmnifoodScreen1 from "../../img/portfolio/DanielYehuda.jpg";
import OmnifoodScreen2 from "../../img/danielYehuda/DanielYehuda2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function DanielYehuda() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Daniel Yehuda")}
        client={t("Daniel Yehuda")}
        year="2020"
        services={t("Design, Web Development, maintenance, SEO")}
        linkHref="https://www.danielyehuda.co.il/"
        projimg1={OmnifoodScreen1}
        projimg2={OmnifoodScreen2}
        projLogo={projLogo}
        projText={t(
          "Daniel Yehuda is a Jewish musician who connects young Jewish souls through uplifting music. He offers customized performances, workshops, and events worldwide, focusing on Judaism and Zionism. Daniel also serves as a cantor and provides entertainment for celebrations like weddings and bar mitzvahs."
        )}
      />
    </div>
  );
}
