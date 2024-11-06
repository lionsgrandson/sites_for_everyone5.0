// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/patentNY/patNYLogo.png";
import screen1 from "../../img/patentNY/patentNYpic2.png";
import screen2 from "../../img/patentNY/patentNYpic1.png";
import { useTranslation } from "react-i18next";
export default function PatentNY() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Shlomo Horowitz Patents and Intellectual Property Ltd.")}
        client={t("Shlomo Horowitz Patents and Intellectual Property Ltd.")}
        year="2024"
        services={t("SEO, Translation")}
        linkHref="https://patentny.com/en/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Shlomo Horowitz, a seasoned intellectual property attorney specializing in patent, trademark, and copyright law. He assists clients worldwide in obtaining and defending a wide array of IP rights across industries, emphasizing personal client attention and in-depth legal expertise."
        )}
      />
    </div>
  );
}
