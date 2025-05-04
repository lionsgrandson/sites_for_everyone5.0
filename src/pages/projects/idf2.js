import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/tene/idfteneLogo.png";
import screen1 from "../../img/portfolio/idftene2.0.png";
import screen2 from "../../img/tene/screen2.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function TENE2() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>IDF Tene v2.0 | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="IDF Tene v2.0 site by Moshe Schwartzberg, showcasing military tech innovation."
        />
        <meta
          name="keywords"
          content="military tech website, custom web development, Moshe Schwartzberg, IDF Tene"
        />
        <meta
          property="og:title"
          content="IDF Tene v2.0 | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="IDF Tene v2.0, a military tech site by Moshe Schwartzberg for advanced solutions."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/idf-tene-v2"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="IDF Tene v2.0 | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="IDF Tene v2.0, a military tech site by Moshe Schwartzberg for advanced solutions."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "IDF Tech & Maintenance Corps v2.0",
            description:
              "IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation, developing advanced systems and strategies.",
            url: "https://web.archive.org/web/20240123052855/https://idftene.com/",
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
        projName={t("IDF Tech & Maintenance corps v2.0")}
        client={t("IDF Tech & Maintenance corps v2.0")}
        year="2018"
        services={t("Web Development, Maintinance")}
        linkHref="https://web.archive.org/web/20240123052855/https://idftene.com/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "IDF Tene is a corps within the Israel Defense Forces focused on technological and operational innovation. This unit develops and implements cutting-edge solutions to enhance military capabilities across various domains. TENE combines expertise in technology, engineering, and combat to create advanced systems and strategies, ensuring Israel's military readiness in the face of evolving threats."
        )}
      />
    </div>
  );
}
