import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/maim/maimLogo.png";
import screen1 from "../../img/portfolio/maim-chaim.jpg";
import screen2 from "../../img/maim/screen2.jpg";
import { useTranslation } from "react-i18next";

export default function LFZ() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Maim Chaim")}
        client={t("Maim Chaim")}
        year="2018"
        services={t("Design, Web Development")}
        linkHref="https://maimchaim.org.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Maim Chaim is a Torah-based school in Jerusalem that provides a holistic education for boys and girls. It combines religious studies with core subjects, fostering joyful learning and personal growth through diverse activities like music, art, and life skills."
        )}
      />
    </div>
  );
}
