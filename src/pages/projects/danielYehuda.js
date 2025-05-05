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
        <title>Daniel Yehuda | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Daniel Yehuda’s Jewish music site."
        />
        <meta
          name="keywords"
          content="CodeCrafter music site, custom web development, Daniel Yehuda, Jewish events"
        />
        <meta
          property="og:title"
          content="Daniel Yehuda | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Daniel Yehuda’s music site, crafted by CodeCrafter for Jewish performances."
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
          content="Daniel Yehuda | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Daniel Yehuda’s music site, crafted by CodeCrafter for Jewish performances."
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
              "Crafting code, creating solutions. Daniel Yehuda’s site, built by CodeCrafter, connects Jewish youth through music and events.",
            url: "https://www.danielyehuda.co.il/",
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
