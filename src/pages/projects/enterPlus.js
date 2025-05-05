import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/enterplus/enterplusLogo.png";
import screen1 from "../../img/portfolio/EnterPlus.png";
import screen2 from "../../img/enterplus/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function EnterPlus() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Enter Plus | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Enter Plus’s safety bracelet site."
        />
        <meta
          name="keywords"
          content="CodeCrafter safety device site, custom web development, Enter Plus, drowning detection"
        />
        <meta
          property="og:title"
          content="Enter Plus | CodeCrafter Portfolio"
        />
        <meta
          property="og:description"
          content="Enter Plus’s drowning detection site, crafted by CodeCrafter for pool safety."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/enter-plus"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Enter Plus | CodeCrafter Portfolio"
        />
        <meta
          name="twitter:description"
          content="Enter Plus’s drowning detection site, crafted by CodeCrafter for pool safety."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Enter Plus",
            description:
              "Crafting code, creating solutions. Enter Plus’s site, built by CodeCrafter, promotes a drowning detection safety bracelet for pools.",
            url: "https://www.enter-plus.com/",
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
        projName={t("Enter Plus")}
        client={t("Enter Plus")}
        year="2017"
        services={t("Web Development, SEO, Maintinance")}
        linkHref="https://enterplusco.com"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Enter Plus has created a life-saving bracelet that detects drowning by monitoring vital signs. When a drowning incident occurs, it automatically alerts lifeguards, parents, and emergency services like 911. This innovative device enhances pool safety and provides peace of mind for families."
        )}
      />
    </div>
  );
}
