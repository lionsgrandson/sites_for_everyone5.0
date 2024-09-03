import React from "react";
import Menu from "../components/menu/menu";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Moshe from "../img/Schwartzberg_Moshe.jpg";
import Ari from "../img/AriHeadshot.jpg";
import Faina from "../img/fainaHeadshot.jpg";
import Ofer from "../img/oferHeadshotjpg.jpg";
import Nitzan from "../img/NitzanHeadshot.jpeg";
import "./about.css";

export default function About() {
  const teamMembers = [
    { name: "Moshe", role: "Head Developer, CEO", image: Moshe },
    { name: "Ari", role: "Developer, Designer", image: Ari },
    { name: "Faina", role: "SEO Manager", image: Faina },
    { name: "Ofer", role: "Designer", image: Ofer },
    { name: "Nitzan", role: "Chef", image: Nitzan },
  ];

  return (
    <div className="about-div">
      <Menu />
      <h1 className="aboutH1Team">Meet The Team</h1>
      <div className="imgDivTeam">
        {teamMembers.map((member, index) => (
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
        ))}
      </div>
      <div className="ourMissionAboutDiv">
        <CTA
          ctaH1="Our "
          ctaH1Spn="Mission"
          ctaP="Our mission is to empower small and medium-sized businesses with custom web solutions that enhance their online presence. We prioritize integrity and personalized service, aiming to be the go-to choice for unique digital experiences and innovative mobile app development."
          ctaCCls={true}
          ctaSndCls={true}
        />
      </div>
      <div className="ourStoryAboutDiv">
        <CTA
          ctaH1="Our"
          ctaH1Spn="Story"
          ctaP="Our web development company was born from a high school passion project that blossomed into a full-fledged enterprise. What started as a one-man operation during my teenage years has evolved into a dynamic team of skilled professionals, many of whom I met during my military service in various software development units."
          ctaP2="Today, our company stands out by offering truly bespoke solutions. We eschew templates in favor of custom-built websites using programming languages, providing a personalized touch that sets us apart in a crowded market."
          ctaCCls={true}
        />
      </div>
      <CTA
        ctaH1="Call Us Today"
        ctaP="Our expert team is eager to collaborate with you on creating a stunning, high-performing website. Whether you need a fresh design, improved functionality, or expert digital marketing strategies, we've got you covered. Contact us today for a free consultation and let's bring your vision to life!"
        btnOnBtn={true}
        ctaBtn="Contact Us"
        florGr={true}
      />

      <Footer />
    </div>
  );
}
