import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/toraDojo/toradojoLogo.jpg";
import screen1 from "../../img/portfolio/ToraDojoIsrael.jpg";
import screen2 from "../../img/toraDojo/screen2.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function ToraDojo() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Tora Dojo Israel | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Tora Dojo Israel’s martial arts site."
        />
        <meta
          name="keywords"
          content="CodeCrafter martial arts site, custom web development, Tora Dojo Israel, fitness training"
        />
        <meta
          property="og:title"
          content="Tora Dojo Israel | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Tora Dojo Israel’s martial arts site, crafted by CodeCrafter for global training."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/tora-dojo"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tora Dojo Israel | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Tora Dojo Israel’s martial arts site, crafted by CodeCrafter for global training."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Tora Dojo Israel",
            description:
              "Crafting code, creating solutions. Tora Dojo Israel’s site, built by CodeCrafter, supports the largest Tora Dojo branch outside the US, founded by Arthur Gribetz.",
            url: "https://toradojo.co.il",
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
        projName={t("Tora Dojo Israel")}
        client={t("Tora Dojo Israel")}
        year="2017"
        services={t("Web Development, Maintinance")}
        linkHref="https://toradojo.co.il"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "This is the largest Tora Dojo branch outside the United States, founded by sixth-degree black belt Arthur Gribetz, along with a dedicated team of high-ranking expert instructors."
        )}
      />
    </div>
  );
}
