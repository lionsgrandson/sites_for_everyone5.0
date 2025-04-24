import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/maim/maimLogo.png";
import screen1 from "../../img/portfolio/maim-chaim.jpg";
import screen2 from "../../img/maim/screen2.jpg";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function LFZ() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Maim Chaim | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Maim Chaim’s Torah school site by Moshe Schwartzberg, blending education and faith."
        />
        <meta
          name="keywords"
          content="Torah school website, custom web development, Moshe Schwartzberg, religious education site"
        />
        <meta
          property="og:title"
          content="Maim Chaim | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Maim Chaim, a Torah school site by Moshe Schwartzberg, fosters joyful learning."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/maim-chaim"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Maim Chaim | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Maim Chaim, a Torah school site by Moshe Schwartzberg, fosters joyful learning."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Maim Chaim",
            description:
              "Maim Chaim is a Torah-based school in Jerusalem providing holistic education for boys and girls, combining religious studies with core subjects.",
            url: "https://maimchaim.org.il/",
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
        projName={t("Maim Chaim")}
        client={t("Maim Chaim")}
        year="2018"
        services={t("Design, Web Development")}
        linkHref="https://maimchaim.org.il/"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        projText={t(
          "Maim Chaim is a Torah-based school in Jerusalem that provides a holistic education for boys and girls. It combines religious studies with core subjects, fostering joyful learning and personal growth through diverse activities like music, art, and life skills."
        )}
      />
    </div>
  );
}
