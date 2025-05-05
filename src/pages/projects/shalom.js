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
        <title>Shalom Carmel | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Shalom Carmel’s jewelry site."
        />
        <meta
          name="keywords"
          content="CodeCrafter e-commerce, custom Shopify development, Shalom Carmel, luxury jewelry"
        />
        <meta
          property="og:title"
          content="Shalom Carmel | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Shalom Carmel’s jewelry site, crafted by CodeCrafter for luxury e-commerce."
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
          content="Shalom Carmel | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Shalom Carmel’s jewelry site, crafted by CodeCrafter for luxury e-commerce."
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
              "Crafting code, creating solutions. Shalom Carmel’s e-commerce site, built by CodeCrafter, showcases luxury jewelry with Shopify integration.",
            url: "https://shalomcarmel.com/",
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
