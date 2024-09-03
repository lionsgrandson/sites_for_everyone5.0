// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/danielYehuda/dyLogo.png";
import OmnifoodScreen1 from "../../img/portfolio/DanielYehuda.jpg";
import OmnifoodScreen2 from "../../img/danielYehuda/DanielYehuda2.png";
export default function DanielYehuda() {
  return (
    <div>
      <AboutProject
        projName="Daniel Yehuda"
        client="Daniel Yehuda"
        year="2020"
        services="Design, Web Development, maintenance, SEO"
        linkHref="https://www.danielyehuda.co.il/"
        projimg1={OmnifoodScreen1}
        projimg2={OmnifoodScreen2}
        projLogo={projLogo}
        projText="Daniel Yehuda is a Jewish musician who connects young Jewish souls through uplifting music. He offers customized performances, workshops, and events worldwide, focusing on Judaism and Zionism. Daniel also serves as a cantor and provides entertainment for celebrations like weddings and bar mitzvahs."
      />
    </div>
  );
}
