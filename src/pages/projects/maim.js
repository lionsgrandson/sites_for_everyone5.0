import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/maim/maimLogo.png";
import screen1 from "../../img/portfolio/maim-chaim.jpg";
import screen2 from "../../img/maim/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function LFZ() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Maim Chaim | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Maim Chaim’s Torah school site."
        />
        <meta
          name="keywords"
          content="CodeCrafter Torah school site, custom web development, Maim Chaim, religious education"
        />
        <meta
          property="og:title"
          content="Maim Chaim | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Maim Chaim’s Torah school site, crafted by CodeCrafter for holistic education."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/maim-chaim"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Maim Chaim | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Maim Chaim’s Torah school site, crafted by CodeCrafter for holistic education."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Maim Chaim",
            description:
              "Crafting code, creating solutions. Maim Chaim’s site, built by CodeCrafter, supports a Torah-based school in Jerusalem.",
            url: "https://maimchaim.org.il/",
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
        projName={t("Maim Chaim")}
        client={t("Maim Chaim")}
        year="2018"
        services={t("Design, Web Development")}
        linkHref="https://maimchaim.org.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Maim Chaim is a Torah-based school in Jerusalem that provides a holistic education for boys and girls. It combines religious studies with core subjects, fostering joyful learning and personal growth through diverse activities like music, art, and life skills."
        )}
      />
    </div>
  );
}
