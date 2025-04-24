// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/patentNY/patNYLogo.png";
import screen1 from "../../img/patentNY/patentNYpic2.png";
import screen2 from "../../img/patentNY/patentNYpic1.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function PatentNY() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Shlomo Horowitz | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Shlomo Horowitz’s IP law site by Moshe Schwartzberg, built for global patent services."
        />
        <meta
          name="keywords"
          content="intellectual property website, custom web development, Moshe Schwartzberg, patent attorney site"
        />
        <meta
          property="og:title"
          content="Shlomo Horowitz | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Shlomo Horowitz’s patent law site, a custom project by Moshe Schwartzberg for IP services."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/shlomo-horowitz"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shlomo Horowitz | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Shlomo Horowitz’s patent law site, a custom project by Moshe Schwartzberg for IP services."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Shlomo Horowitz",
            description:
              "Shlomo Horowitz, an intellectual property attorney, offers patent, trademark, and copyright services with global expertise.",
            url: "https://patentny.com/en/",
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
        projName={t("Shlomo Horowitz Patents and Intellectual Property Ltd.")}
        client={t("Shlomo Horowitz Patents and Intellectual Property Ltd.")}
        year="2024"
        services={t("SEO, Translation")}
        linkHref="https://patentny.com/en/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Shlomo Horowitz, a seasoned intellectual property attorney specializing in patent, trademark, and copyright law. He assists clients worldwide in obtaining and defending a wide array of IP rights across industries, emphasizing personal client attention and in-depth legal expertise."
        )}
      />
    </div>
  );
}
