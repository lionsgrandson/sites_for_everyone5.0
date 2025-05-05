// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/lfz/lfzLogo.png";
import screen1 from "../../img/portfolio/LionsforZion.jpg";
import screen2 from "../../img/lfz/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function LFZ() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Lions for Zion | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Lions for Zion’s advocacy site."
        />
        <meta
          name="keywords"
          content="CodeCrafter non-profit site, custom web development, Lions for Zion, Israel advocacy"
        />
        <meta
          property="og:title"
          content="Lions for Zion | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Lions for Zion’s advocacy site, crafted by CodeCrafter for Israel support."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/lions-for-zion"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lions for Zion | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Lions for Zion’s advocacy site, crafted by CodeCrafter for Israel support."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Lions for Zion",
            description:
              "Crafting code, creating solutions. Lions for Zion’s site, built by CodeCrafter, supports Israel through education and advocacy.",
            url: "https://web.archive.org/web/20230308123826/https://lionsforzion.com/",
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
        projName={t("Lions for Zion")}
        client={t("Lions for Zion")}
        year="2021"
        services={t("Design, Web Development, SEO, maintinance")}
        linkHref="https://web.archive.org/web/20230308123826/https://lionsforzion.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Lions for Zion is a non-profit organization dedicated to supporting Israel and combating antisemitism. They focus on educating and empowering young adults to become advocates for Israel through leadership training, campus activism, and community engagement. The organization aims to strengthen the connection between Jewish youth and their heritage while promoting a positive image of Israel."
        )}
      />
    </div>
  );
}
