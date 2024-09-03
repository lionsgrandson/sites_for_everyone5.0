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
        projText="AI Pro is a technology company specializing in artificial intelligence solutions for businesses. They offer a range of services, including AI consulting, custom software development, and data analysis, aimed at enhancing operational efficiency and decision-making. AI Pro focuses on delivering innovative solutions tailored to meet the specific needs of their clients across various industries."
      />
    </div>
  );
}
