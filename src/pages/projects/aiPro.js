// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/aiPRo/aiProLogo.jpeg";
import screen1 from "../../img/portfolio/ItaiArenFeld.png";
import screen2 from "../../img/aiPRo/screen1AIPro.jpg";
import bothScreens from "../../img/aiPRo/screen1AIProBoth.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function AiPro() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>AI Pro | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="AI Pro’s calibration and validation site by Moshe Schwartzberg, built for seamless solutions."
        />
        <meta
          name="keywords"
          content="calibration services website, custom web development, Moshe Schwartzberg, turn key solutions"
        />
        <meta
          property="og:title"
          content="AI Pro | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="AI Pro’s custom site by Moshe Schwartzberg delivers turn-key calibration and engineering solutions."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/ai-pro"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Pro | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="AI Pro’s custom site by Moshe Schwartzberg delivers turn-key calibration and engineering solutions."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "AI Pro",
            description:
              "AI Pro delivers comprehensive calibration, engineering, and validation services using a Turn Key method for seamless client experiences.",
            url: "https://ai-pro.co.il/",
            creator: {
              "@type": "Person",
              name: "Moshe Schwartzberg",
              email: "mosheschwartzberg@gmail.com",
              telephone: "+972587076077",
            },
          })}
        </script>
      </Helmet>
      <AboutProject
        projName={t("AI pro")}
        client={t("AI pro")}
        year="2023"
        services={t("Design, Web Development, SEO")}
        linkHref="https://ai-pro.co.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "AI Pro delivers comprehensive calibration, engineering, and validation services that prioritize customer needs in a holistic manner. By providing optimal, budget-compliant solutions, they eliminate the burden of additional tasks for clients. Utilizing a `Turn Key` method, they ensure that products and services are ready for immediate use, streamlining the process for a seamless experience."
        )}
      />
    </div>
  );
}
