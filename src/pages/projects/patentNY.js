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
        <title>Shlomo Horowitz | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Shlomo Horowitz’s IP law site."
        />
        <meta
          name="keywords"
          content="CodeCrafter IP law site, custom web development, Shlomo Horowitz, patent attorney"
        />
        <meta
          property="og:title"
          content="Shlomo Horowitz | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Shlomo Horowitz’s IP law site, crafted by CodeCrafter for global patent services."
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
          content="Shlomo Horowitz | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Shlomo Horowitz’s IP law site, crafted by CodeCrafter for global patent services."
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
              "Crafting code, creating solutions. Shlomo Horowitz’s site, built by CodeCrafter, supports global patent and IP law services.",
            url: "https://patentny.com/en/",
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
