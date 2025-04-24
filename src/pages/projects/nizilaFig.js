// import "./aboutProject.css";
import AboutProject from "../../components/projDetials/aboutProject";
import projLogo from "../../img/nezila/NezillaLogo.png";
import screen1 from "../../img/nezila/welcome_client_page.png";
import screen2 from "../../img/nezila/Login_worker.png";
// import bothScreens from "../../img/nezila/screen1AIProBoth.png";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
export default function AiPro() {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>Nezila | Moshe Schwartzberg Portfolio</title>
        <meta
          name="description"
          content="Nezila’s blue-collar app design by Moshe Schwartzberg, showcasing stunning UI/UX."
        />
        <meta
          name="keywords"
          content="blue-collar app, custom app development, Moshe Schwartzberg, Nezila app"
        />
        <meta
          property="og:title"
          content="Nezila | Moshe Schwartzberg Portfolio"
        />
        <meta
          property="og:description"
          content="Nezila, a stunning app design by Moshe Schwartzberg connecting workers to customers."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta
          property="og:url"
          content="https://mosheschwartzberg.com/projects/nezila"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Nezila | Moshe Schwartzberg Portfolio"
        />
        <meta
          name="twitter:description"
          content="Nezila, a stunning app design by Moshe Schwartzberg connecting workers to customers."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Nezila",
            description:
              "Nezila was a startup app designed to connect blue-collar workers to customers, featuring a stunning UI/UX crafted by Moshe Schwartzberg.",
            url: "https://www.figma.com/proto/Ioo1yDs8auboCdnoh4dCwF/Untitled?node-id=0-1&t=TD3GOI9RM1hmbwff-1",
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
        projName={t("Nezila")}
        client={t("Nezila")}
        year="2024"
        projimg1={screen1}
        projimg2={screen2}
        projLogo={projLogo}
        services={t("Design, Android App")}
        linkHref="https://www.figma.com/proto/Ioo1yDs8auboCdnoh4dCwF/Untitled?node-id=0-1&t=TD3GOI9RM1hmbwff-1"
        projText={t(
          "Nezila was a start-up that hired me to build then an app, it was meant to connect blue colored workers to customers, in the end the project failed, but we're left with a stunning design"
        )}
      />
    </div>
  );
}
