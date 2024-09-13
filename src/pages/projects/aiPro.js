// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/aiPRo/aiProLogo.jpeg";
import screen1 from "../../img/portfolio/ItaiArenFeld.png";
import screen2 from "../../img/aiPRo/screen1AIPro.png";
import { useTranslation } from "react-i18next";

export default function AiPro() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("AI pro")}
        client={t("AI pro")}
        year="2023"
        services={t("Design, Web Development, SEO")}
        linkHref="https://ai-pro.co.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "AI Pro delivers comprehensive calibration, engineering, and validation services that prioritize customer needs in a holistic manner. By providing optimal, budget-compliant solutions, they eliminate the burden of additional tasks for clients. Utilizing a `Turn Key` method, they ensure that products and services are ready for immediate use, streamlining the process for a seamless experience."
        )}
      />
    </div>
  );
}
