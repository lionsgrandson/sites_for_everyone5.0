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
        <title>Omnifood | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Omnifood: AI-powered meal subscription app by Moshe Schwartzberg. Healthy, tailored meals delivered to you."
        />
        <meta
          name="keywords"
          content=" AI meal planning app, custom app development, Moshe Schwartzberg, healthy meal delivery"
        />
        <meta
          property="og:title"
          content="Omnifood | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Discover Omnifood, a custom app by Moshe Schwartzberg delivering AI-tailored, healthy meals."
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
        <meta
          name="twitter:title"
          content="Omnifood | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Discover Omnifood, a custom app by Moshe Schwartzberg delivering AI-tailored, healthy meals."
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
              "Omnifood is a personalized meal subscription service that delivers healthy, chef-prepared meals to your door. Using AI, it creates tailored meal plans based on dietary preferences.",
            url: "https://omnifood.dev",
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
