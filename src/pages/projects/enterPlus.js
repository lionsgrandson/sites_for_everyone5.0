import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/enterplus/enterplusLogo.png";
import screen1 from "../../img/portfolio/EnterPlus.png";
import screen2 from "../../img/enterplus/screen2.png";
export default function EnterPlus() {
  return (
    <div>
      <AboutProject
        projName="Enter Plus"
        client="Enter Plus"
        year="2017"
        services="Web Development, SEO, Maintinance"
        linkHref="https://enterplusco.com"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Enter Plus has created a life-saving bracelet that detects drowning by monitoring vital signs. When a drowning incident occurs, it automatically alerts lifeguards, parents, and emergency services like 911. This innovative device enhances pool safety and provides peace of mind for families."
      />
    </div>
  );
}
