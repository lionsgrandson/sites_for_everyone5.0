// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/aiPRo/aiProLogo.jpeg";
import screen1 from "../../img/portfolio/ItaiArenFeld.png";
import screen2 from "../../img/aiPRo/screen1AIPro.png";
export default function AiPro() {
  return (
    <div>
      <AboutProject
        projName="AI Pro"
        client="AI Pro"
        year="2023"
        services="Design, Web Development, SEO"
        linkHref="https://ai-pro.co.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Smokin T's is a barbecue and grill-style restaurant that offers a unique blend of delicious dishes, including house-made pastrami and corned beef sandwiches. With a focus on quality, their menu features mouthwatering appetizers, fresh desserts, and exemplary service in a relaxed atmosphere. The restaurant has evolved through various kitchens to perfect its recipes, ensuring a memorable dining experience."
      />
    </div>
  );
}
