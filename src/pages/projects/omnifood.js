// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import OmnifoodLogo from "../../img/omnifood/omnifoodLogo.png";
import OmnifoodScreen1 from "../../img/omnifood/omnigoofScreenshot1.png";
import OmnifoodScreen2 from "../../img/omnifood/omnigoofScreenshot2.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function Omnifood() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Omnifood | CodeCrafter Portfolio</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. CodeCrafter built Omnifood’s AI meal subscription app."
        />
        <meta
          name="keywords"
          content="CodeCrafter AI app, custom app development, Omnifood, healthy meal delivery"
        />
        <meta property="og:title" content="Omnifood | CodeCrafter Portfolio" />
        <meta
          property="og:description"
          content="Omnifood’s AI meal app, crafted by CodeCrafter for healthy, tailored dining."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/omnifood"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnifood | CodeCrafter Portfolio" />
        <meta
          name="twitter:description"
          content="Omnifood’s AI meal app, crafted by CodeCrafter for healthy, tailored dining."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Omnifood",
            description:
              "Crafting code, creating solutions. Omnifood is a personalized meal subscription service with AI-tailored meal plans, built by CodeCrafter.",
            url: "https://omnifood.dev",
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
        projName={t("Omnifood")}
        client={t("Omnifood")}
        year="2022"
        services={t("Design, Web Development, maintenance")}
        linkHref="https://omnifood.dev"
        projLogo={OmnifoodLogo}
        projimg1={OmnifoodScreen1}
        projimg2={OmnifoodScreen2}
        projText={t(
          "Omnifood is a personalized meal subscription service that delivers healthy, chef-prepared meals to your door. Using AI, it creates tailored meal plans based on your dietary preferences, offering a variety of options to suit different diets. Enjoy the convenience of nutritious eating while supporting local and organic food sources."
        )}
      />
    </div>
  );
}
