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
        <title>Lions for Zion | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Lions for Zion’s advocacy site by Moshe Schwartzberg, empowering Jewish youth."
        />
        <meta
          name="keywords"
          content="non-profit website, custom web development, Moshe Schwartzberg, Israel advocacy site"
        />
        <meta
          property="og:title"
          content="Lions for Zion | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Lions for Zion, a non-profit site by Moshe Schwartzberg, supports Israel advocacy."
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
          content="Lions for Zion | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Lions for Zion, a non-profit site by Moshe Schwartzberg, supports Israel advocacy."
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
              "Lions for Zion is a non-profit organization supporting Israel and combating antisemitism through education and leadership training.",
            url: "https://web.archive.org/web/20230308123826/https://lionsforzion.com/",
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
