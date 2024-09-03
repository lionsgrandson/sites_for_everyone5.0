import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/shalom/logoShalom.png";
import screen1 from "../../img/portfolio/ShalomCarmel.jpg";
import screen2 from "../../img/shalom/screen2.png";
export default function ShalomCarmel() {
  return (
    <div>
      <AboutProject
        projName="Shalom Carmel"
        client="Shalom Carmel"
        year="2018"
        services="Maintinance"
        linkHref="https://shalom1.ussl.co/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="‘Shalom Carmel’ was established to showcase the rich ethnic and cultural diversity of Haifa and Mount Carmel. Our tours provide groups with the opportunity to engage with various communities in the area and learn how they collaborate to foster a more unified society."
      />
    </div>
  );
}
