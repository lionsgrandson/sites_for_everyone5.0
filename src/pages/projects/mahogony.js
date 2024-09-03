import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/mahogony/mahogonyLogo.png";
import screen1 from "../../img/portfolio/MahogonyIsrael.png";
import screen2 from "../../img/mahogony/screen2.png";
export default function Mahogony() {
  return (
    <div>
      <AboutProject
        projName="Mahogony Israel"
        client="Mahogony Israel"
        year="2024"
        services="Web Development"
        linkHref="https://mahagonyisrael.netlify.app"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText="Mahagony Israel is a luxury furniture and interior design company specializing in high-end wooden furniture and custom-made pieces. They offer a range of exquisite mahogany products, including tables, chairs, cabinets, and bedroom sets. The company prides itself on craftsmanship, attention to detail, and using premium quality materials to create timeless and elegant furniture for discerning clients in Israel and beyond."
      />
    </div>
  );
}
