// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/lfz/lfzLogo.png";
import screen1 from "../../img/portfolio/LionsforZion.jpg";
import screen2 from "../../img/lfz/screen2.png";
export default function LFZ() {
  return (
    <div>
      <AboutProject
        projName="Lions for Zion"
        client="Lions for Zion"
        year="2021"
        services="Design, Web Development, SEO, maintinance"
        linkHref="https://web.archive.org/web/20230308123826/https://lionsforzion.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Lions for Zion is a non-profit organization dedicated to supporting Israel and combating antisemitism. They focus on educating and empowering young adults to become advocates for Israel through leadership training, campus activism, and community engagement. The organization aims to strengthen the connection between Jewish youth and their heritage while promoting a positive image of Israel."
      />
    </div>
  );
}
