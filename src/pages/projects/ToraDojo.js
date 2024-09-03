import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/toraDojo/toradojoLogo.png";
import screen1 from "../../img/portfolio/ToraDojoIsrael.jpg";
import screen2 from "../../img/toraDojo/screen2.png";
export default function ToraDojo() {
  return (
    <div>
      <AboutProject
        projName="Tora Dojo Israel"
        client="Tora Dojo Israel"
        year="2017"
        services="Web Development, Maintinance"
        linkHref="https://toradojo.co.il"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="This is the largest Tora Dojo branch outside the United States, founded by sixth-degree black belt Arthur Gribetz, along with a dedicated team of high-ranking expert instructors."
      />
    </div>
  );
}
