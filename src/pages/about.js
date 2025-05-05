import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Moshe from "../img/Schwartzberg_Moshe.jpg";
import Ari from "../img/AriHeadshot.jpg";
import Faina from "../img/fainaHeadshot.jpg";
import Ofer from "../img/oferHeadshotjpg.jpg";
import fullTeam from "../img/Team members.png";
import fullTeammobile from "../img/Team members - mobile.png";
import { useTranslation } from "react-i18next";
import "./about.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  const { t } = useTranslation();
  const teamMembers = [
    { name: "Moshe", role: t("Head Developer, CEO"), image: Moshe },
    { name: "Ari", role: t("Developer, Designer"), image: Ari },
    { name: "Faina", role: t("SEO Manager"), image: Faina },
    { name: "Ofer", role: t("Designer"), image: Ofer },
    // { name: "Nitzan", role: t("Chef"), image: Nitzan },
  ];

  return (
    <div className="about-div">
      <Helmet>
        <title>About CodeCrafter | Custom Code Solutions</title>
        <meta
          name="description"
          content="Crafting code, creating solutions. Meet CodeCrafter, your team for custom apps and CRMs in Israel!"
        />
        <meta
          name="keywords"
          content="CodeCrafter, custom code Israel, full-stack development, app development, CRM solutions"
        />
        <meta
          property="og:title"
          content="About CodeCrafter | Custom Code Solutions"
        />
        <meta
          property="og:description"
          content="Crafting code, creating solutions. Discover CodeCrafter’s mission to build tailored tech for you."
        />
        <meta
          property="og:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <meta property="og:url" content="https://mosheschwartzberg.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About CodeCrafter | Custom Code Solutions"
        />
        <meta
          name="twitter:description"
          content="Crafting code, creating solutions. Discover CodeCrafter’s mission to build tailored tech for you."
        />
        <meta
          name="twitter:image"
          content="https://mosheschwartzberg.com/logo192.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "About CodeCrafter",
            description:
              "Crafting code, creating solutions. Learn about CodeCrafter’s mission to deliver custom web and app solutions in Israel.",
            publisher: {
              "@type": "Organization",
              name: "CodeCrafter",
              contactPoint: {
                "@type": "ContactPoint",
                email: "mosheschwartzberg@gmail.com",
                telephone: "+972587076077",
              },
            },
            url: "https://mosheschwartzberg.com/about",
          })}
        </script>
      </Helmet>
      <Menu />
      <h1 className="aboutH1Team">{t("Meet The Team")}</h1>
      <div className="imgDivTeam">
        {/* {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="innderDivImg"
          >
            <img
              alt={`Headshot of ${member.name} - ${member.role}`}
              src={member.image}
              className={`AboutTeamHeadshotImg img${index + 1}`}
              loading="lazy"
            />
            <label>{member.role}</label>
          </div>
        ))} */}
        <img
          src={fullTeam}
          className={`AboutTeamHeadshotImg teamDesktop`}
          loading="lazy"
          alt="pictures of the team members for desktop view"
        />
        <img
          src={fullTeammobile}
          className={`AboutTeamHeadshotImg mobileTeam`}
          loading="lazy"
          alt="pictures of the team members for mobile view"
        />
      </div>
      <div className="ourMissionAboutDiv">
        <CTA
          ctaH1={t("OurMis ")}
          ctaH1Spn={t("Mission")}
          ctaP={t(
            "Our mission is to empower small and medium-sized businesses with custom web solutions that enhance their online presence. We prioritize integrity and personalized service, aiming to be the go-to choice for unique digital experiences and innovative mobile app development."
          )}
          ctaCCls={true}
          ctaSndCls={true}
        />
      </div>
      <div className="ourStoryAboutDiv">
        <CTA
          ctaH1={t("OurSt ")}
          ctaH1Spn={t("Story")}
          ctaP={t(
            "Our web development company was born from a high school passion project that blossomed into a full-fledged enterprise. What started as a one-man operation during my teenage years has evolved into a dynamic team of skilled professionals, many of whom I met during my military service in various software development units."
          )}
          ctaP2={t(
            "Today, our company stands out by offering truly bespoke solutions. We eschew templates in favor of custom-built websites using programming languages, providing a personalized touch that sets us apart in a crowded market."
          )}
          ctaCCls={true}
        />
      </div>
      <CTA
        ctaH1={t("Call Us Today")}
        ctaP={t(
          "Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. Contact us today for a free consultation and let's bring your vision to life!"
        )}
        btnOnBtn={true}
        ctaBtn={t("Contact Us")}
        florGr={true}
      />

      <Footer />
    </div>
  );
}
