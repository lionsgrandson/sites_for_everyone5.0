// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/smokin/smokinLogo.png";
import screen1 from "../../img/portfolio/SmokinT's.jpg";
import screen2 from "../../img/smokin/smokin.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function Smokin() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Smokin T’s | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Smokin T’s restaurant site by Moshe Schwartzberg, showcasing BBQ and grill menus."
        />
        <meta
          name="keywords"
          content="restaurant website, custom web development, Moshe Schwartzberg, BBQ menu site"
        />
        <meta
          property="og:title"
          content="Smokin T’s | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Smokin T’s, a BBQ restaurant site crafted by Moshe Schwartzberg for a tasty experience."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/smokin-ts"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Smokin T’s | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Smokin T’s, a BBQ restaurant site crafted by Moshe Schwartzberg for a tasty experience."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Smokin T’s",
            description:
              "Smokin T’s is a barbecue and grill-style restaurant offering house-made pastrami and corned beef sandwiches with exemplary service.",
            url: "https://mosheschwartzberg.com/projects/smokin-ts",
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
        projName={t("Smokin T's")}
        client={t("Smokin T's")}
        year="2017"
        services={t("Design, Web Development, SEO")}
        linkHref="/404not"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Smokin T's is a barbecue and grill-style restaurant that offers a unique blend of delicious dishes, including house-made pastrami and corned beef sandwiches. With a focus on quality, their menu features mouthwatering appetizers, fresh desserts, and exemplary service in a relaxed atmosphere. The restaurant has evolved through various kitchens to perfect its recipes, ensuring a memorable dining experience."
        )}
      />
    </div>
  );
}
