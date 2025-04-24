import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/mahogony/mahogonyLogo.png";
import screen1 from "../../img/portfolio/MahogonyIsrael.png";
import screen2 from "../../img/mahogony/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function Mahogony() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Mahogony Israel | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Mahogony Israel’s luxury furniture site by Moshe Schwartzberg, showcasing craftsmanship."
        />
        <meta
          name="keywords"
          content="luxury furniture website, custom web development, Moshe Schwartzberg, mahogany furniture"
        />
        <meta
          property="og:title"
          content="Mahogony Israel | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Mahogony Israel, a luxury furniture site by Moshe Schwartzberg, crafted with elegance."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/mahogony-israel"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mahogony Israel | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Mahogony Israel, a luxury furniture site by Moshe Schwartzberg, crafted with elegance."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Mahogony Israel",
            description:
              "Mahogony Israel is a luxury furniture and interior design company specializing in high-end wooden furniture and custom-made pieces.",
            url: "https://mahagonyisrael.netlify.app",
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
        projName={t("Mahogony Israel")}
        client={t("Mahogony Israel")}
        year="2024"
        services={t("Web Development")}
        linkHref="https://mahagonyisrael.netlify.app"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Mahagony Israel is a luxury furniture and interior design company specializing in high-end wooden furniture and custom-made pieces. They offer a range of exquisite mahogany products, including tables, chairs and cabinets. The company prides itself on craftsmanship, attention to detail, and using premium quality materials to create timeless and elegant furniture for discerning clients in Israel and beyond."
        )}
      />
    </div>
  );
}
