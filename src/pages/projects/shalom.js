import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/shalom/logoShalom.png";
import screen1 from "../../img/portfolio/ShalomCarmel.jpg";
import screen2 from "../../img/shalom/screen2.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function ShalomCarmel() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Shalom Carmel | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Shalom Carmel’s cultural tour site by Moshe Schwartzberg, showcasing Haifa’s diversity."
        />
        <meta
          name="keywords"
          content="cultural tour website, custom web development, Moshe Schwartzberg, Haifa tours"
        />
        <meta
          property="og:title"
          content="Shalom Carmel | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Shalom Carmel, a cultural tour site by Moshe Schwartzberg, celebrates Haifa’s unity."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/shalom-carmel"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shalom Carmel | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Shalom Carmel, a cultural tour site by Moshe Schwartzberg, celebrates Haifa’s unity."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Shalom Carmel",
            description:
              "Shalom Carmel showcases the ethnic and cultural diversity of Haifa and Mount Carmel through community engagement tours.",
            url: "https://shalom1.ussl.co/",
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
        projName={t("Shalom Carmel")}
        client={t("Shalom Carmel")}
        year="2018"
        services={t("Maintinance")}
        linkHref="https://shalom1.ussl.co/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "‘Shalom Carmel’ was established to showcase the rich ethnic and cultural diversity of Haifa and Mount Carmel. Their tours provide groups with the opportunity to engage with various communities in the area and learn how they collaborate to foster a more unified society."
        )}
      />
    </div>
  );
}
