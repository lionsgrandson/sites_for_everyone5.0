import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/tene/idfteneLogo.png";
import screen1 from "../../img/portfolio/idftene2.0.png";
import screen2 from "../../img/tene/screen2.png";
export default function TENE2() {
  return (
    <div>
      <AboutProject
        projName="IDF Tech & Maintenance corps v2.0"
        client="IDF Tech & Maintenance corps v2.0"
        year="2018"
        services="Web Development, Maintinance"
        linkHref="https://web.archive.org/web/20240123052855/https://idftene.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation. This unit develops and implements cutting-edge solutions to enhance military capabilities across various domains. TENE combines expertise in technology, engineering, and combat to create advanced systems and strategies, ensuring Israel's military readiness in the face of evolving threats."
      />
    </div>
  );
}
