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
        projText="EnterPlus is a digital marketing agency that specializes in providing comprehensive online solutions for businesses. They offer services such as search engine optimization (SEO), social media marketing, and content creation to enhance brand visibility and drive customer engagement. EnterPlus focuses on delivering tailored strategies to help clients achieve their marketing goals effectively."
      />
    </div>
  );
}
