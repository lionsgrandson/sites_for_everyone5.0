// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/smokin/smokinLogo.png";
import screen1 from "../../img/portfolio/SmokinT's.jpg";
import screen2 from "../../img/smokin/smokin.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function Smokin() {
  const { t } = useTranslation();

  return (
    <div>
      <AboutProject
        projName={t("Smokin T's")}
        client={t("Smokin T's")}
        year="2017"
        services={t("Design, Web Development, SEO")}
        linkHref="/404not"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Smokin T's is a barbecue and grill-style restaurant that offers a unique blend of delicious dishes, including house-made pastrami and corned beef sandwiches. With a focus on quality, their menu features mouthwatering appetizers, fresh desserts, and exemplary service in a relaxed atmosphere. The restaurant has evolved through various kitchens to perfect its recipes, ensuring a memorable dining experience."
        )}
      />
    </div>
  );
}
