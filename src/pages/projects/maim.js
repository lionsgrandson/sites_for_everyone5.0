import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/maim/maimLogo.png";
import screen1 from "../../img/portfolio/maim-chaim.jpg";
import screen2 from "../../img/maim/screen2.png";
export default function LFZ() {
  return (
    <div>
      <AboutProject
        projName="Maim Chaim"
        client="Maim Chaim"
        year="2018"
        services="Design, Web Development"
        linkHref="https://maimchaim.org.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Maim Chaim is a Torah-based school in Jerusalem that provides a holistic education for boys and girls. It combines religious studies with core subjects, fostering joyful learning and personal growth through diverse activities like music, art, and life skills."
      />
    </div>
  );
}
