// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/smokin/smokinLogo.png";
import screen1 from "../../img/portfolio/SmokinT's.jpg";
import screen2 from "../../img/smokin/smokin.png";
export default function Smokin() {
  return (
    <div>
      <AboutProject
        projName="Smokin T's"
        client="Smokin T's"
        year="2017"
        services="Design, Web Development, SEO"
        linkHref="https://smokin-t.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Smokin T's is a barbecue and grill-style restaurant that offers a unique blend of delicious dishes, including house-made pastrami and corned beef sandwiches. With a focus on quality, their menu features mouthwatering appetizers, fresh desserts, and exemplary service in a relaxed atmosphere. The restaurant has evolved through various kitchens to perfect its recipes, ensuring a memorable dining experience."
      />
    </div>
  );
}
