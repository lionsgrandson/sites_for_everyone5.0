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
        <title>Mahogony Israel | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Mahogony Israel’s furniture site."
        />
        <meta
          name="keywords"
          content="CodeCrafter furniture site, custom web development, Mahogony Israel, luxury design"
        />
        <meta
          property="og:title"
          content="Mahogony Israel | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Mahogony Israel’s luxury furniture site, crafted by CodeCrafter with elegance."
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
          content="Mahogony Israel | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Mahogony Israel’s luxury furniture site, crafted by CodeCrafter with elegance."
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
              "Crafting code, creating solutions. Mahogony Israel’s site, built by CodeCrafter, showcases luxury wooden furniture and custom designs.",
            url: "https://mahagonyisrael.netlify.app",
            creator: {
              "@type": "Organization",
              name: "CodeCrafter",
              contactPoint: {
                "@type": "ContactPoint",
                email: "mosheschwartzberg@gmail.com",
                telephone: "+972587076077",
              },
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
