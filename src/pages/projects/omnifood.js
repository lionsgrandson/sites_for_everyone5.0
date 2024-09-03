// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import OmnifoodLogo from "../../img/omnifood/omnifoodLogo.png";
import OmnifoodScreen1 from "../../img/omnifood/omnigoofScreenshot1.png";
import OmnifoodScreen2 from "../../img/omnifood/omnigoofScreenshot2.png";
export default function Omnifood() {
  return (
    <div>
      <AboutProject
        projName="Omnifood"
        client="Omnifood"
        year="2022"
        services="Design, Web Development, maintenance"
        linkHref="https://omnifood.dev"
        projLogo={OmnifoodLogo}
        projimg1={OmnifoodScreen1}
        projimg2={OmnifoodScreen2}
        projText="Omnifood is a personalized meal subscription service that delivers healthy, chef-prepared meals to your door. Using AI, it creates tailored meal plans based on your dietary preferences, offering a variety of options to suit different diets. Enjoy the convenience of nutritious eating while supporting local and organic food sources."
      />
    </div>
  );
}