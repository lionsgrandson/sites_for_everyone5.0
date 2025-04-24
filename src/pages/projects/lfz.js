// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/lfz/lfzLogo.png";
import screen1 from "../../img/portfolio/LionsforZion.jpg";
import screen2 from "../../img/lfz/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function LFZ() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Lions for Zion")}
        client={t("Lions for Zion")}
        year="2021"
        services={t("Design, Web Development, SEO, maintinance")}
        linkHref="https://web.archive.org/web/20230308123826/https://lionsforzion.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Lions for Zion is a non-profit organization dedicated to supporting Israel and combating antisemitism. They focus on educating and empowering young adults to become advocates for Israel through leadership training, campus activism, and community engagement. The organization aims to strengthen the connection between Jewish youth and their heritage while promoting a positive image of Israel."
        )}
      />
    </div>
  );
}
