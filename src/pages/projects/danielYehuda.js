// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/danielYehuda/dyLogo.png";
import OmnifoodScreen1 from "../../img/portfolio/DanielYehuda.jpg";
import OmnifoodScreen2 from "../../img/danielYehuda/DanielYehuda2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function DanielYehuda() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Daniel Yehuda | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Daniel Yehuda’s site by Moshe Schwartzberg connects Jewish youth through music and events."
        />
        <meta
          name="keywords"
          content="Jewish music website, custom web development, Moshe Schwartzberg, event performance site"
        />
        <meta
          property="og:title"
          content="Daniel Yehuda | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Daniel Yehuda’s music site, a custom project by Moshe Schwartzberg for Jewish events."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/daniel-yehuda"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Daniel Yehuda | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore Daniel Yehuda’s music site, a custom project by Moshe Schwartzberg for Jewish events."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Daniel Yehuda",
            description:
              "Daniel Yehuda is a Jewish musician who connects young Jewish souls through uplifting music, offering customized performances and workshops worldwide.",
            url: "https://www.danielyehuda.co.il/",
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
        projName={t("Daniel Yehuda")}
        client={t("Daniel Yehuda")}
        year="2020"
        services={t("Design, Web Development, maintenance, SEO")}
        linkHref="https://www.danielyehuda.co.il/"
        projimg1={OmnifoodScreen1}
        projimg2={OmnifoodScreen2}
        projLogo={projLogo}
        projText={t(
          "Daniel Yehuda is a Jewish musician who connects young Jewish souls through uplifting music. He offers customized performances, workshops, and events worldwide, focusing on Judaism and Zionism. Daniel also serves as a cantor and provides entertainment for celebrations like weddings and bar mitzvahs."
        )}
      />
    </div>
  );
}
