// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/nezila/NezillaLogo.png";
import screen1 from "../../img/nezila/welcome_client_page.png";
import screen2 from "../../img/nezila/Login_worker.png";
// import bothScreens from "../../img/nezila/screen1AIProBoth.png";
import { useTranslation } from "react-i18next";

export default function AiPro() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Nezila")}
        client={t("Nezila")}
        year="2024"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        services={t("Design, Android App")}
        linkHref="https://www.figma.com/proto/Ioo1yDs8auboCdnoh4dCwF/Untitled?node-id=0-1&t=TD3GOI9RM1hmbwff-1"
        projText={t(
          "Nezila was a started that hired me to build then an app, it was meant to connect blue colored workers to customers, in the end the project failed, but we're left with a stunning design"
        )}
      />
    </div>
  );
}
//               <FigmaDes linkHref={linkArr[index]} imgTitle={textArr[index]} />
